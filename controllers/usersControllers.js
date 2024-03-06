import User from "../models/user.js"
import HttpError from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import bcrypt, { hash } from "bcrypt"

const register = async(req, res) => {
   const {email,password,subscription} = req.body;
   const normalizedEmail = email.toLowerCase()
   const user = await User.findOne({email:normalizedEmail});
   if (user !== null) {
    throw HttpError(409,"User already registered")
   } 
   const passwordHash = await bcrypt.hash(password,10);
   const result = await User.create({email:normalizedEmail,password:passwordHash,subscription});
   console.log(result);
   res.status(201).send({message: "Registration succsessfully"})
};

const login = async (req, res) => {
    const {email,password} = req.body;
    const normalizedEmail = email.toLowerCase();
    const user = await User.findOne({email:normalizedEmail});
    if (user === null) {
        throw HttpError(401,'error email')
       } 
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw HttpError(401,'error pass')
    }
    res.send({token:"TOKEN"})
};


const controllers = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),

};

export default controllers;