import HttpError from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import {
    listContact,
    getContactById,
    addContact,
    removeContact,
    updateContactById,
} from "../services/contactsServices.js";

const getAllContacts = async(req, res) => {
    const result = await listContact();
    res.json(result)
};

export const getOneContact = async (req, res) => {
    const { id } = req.params;
    const result = await getContactById(id);
    if (!result) {
        throw HttpError(404)
    }
    res.json(result);
};

export const deleteContact = async(req, res) => {
    const { id } = req.params;
    const result = await removeContact(id);
    if (!result) {
        throw HttpError(404)
    }
    res.json({
        message: "Delete success",
    })
};

export const createContact = async (req, res) => {
    const result = await addContact(req.body);
    //console.log(result);
    res.status(201).json(result);
};

export const updateContact = async (req, res) => {
    const { id } = req.params;
    const result = await updateContactById(id, req.body);
    if (!result) {
        throw HttpError(404) 
    }
    res.json(result);
};

const controllers = {
    getAllContacts: ctrlWrapper(getAllContacts),
    getOneContact: ctrlWrapper(getOneContact),
    deleteContact: ctrlWrapper(deleteContact),
    createContact: ctrlWrapper(createContact),
    updateContact: ctrlWrapper(updateContact),
};

export default controllers;