import express from "express";
import controllers from "../controllers/usersControllers.js";
import validateBody from "../helpers/validateBody.js";
import { registerUserSchema,loginUserSchema} from "../schemas/usersSchemas.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const usersRouter = express.Router();

usersRouter.post("/register",  validateBody(registerUserSchema),  controllers.register);
usersRouter.post("/login",  validateBody(loginUserSchema),  controllers.login);
usersRouter.get("/logout", auth, controllers.logout);
usersRouter.get("/avatar", auth ,controllers.getAvatar);
usersRouter.patch("/avatar", auth , upload.single("avatar"), controllers.uploadAvatar);

export default usersRouter;