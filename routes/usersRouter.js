import express from "express";
import controllers from "../controllers/usersControllers.js";
import validateBody from "../helpers/validateBody.js";
import { registerUserSchema,loginUserSchema} from "../schemas/usersSchemas.js";


const usersRouter = express.Router();

usersRouter.post("/register",  validateBody(registerUserSchema),  controllers.register);
usersRouter.post("/login",  validateBody(loginUserSchema),  controllers.login);

export default usersRouter;