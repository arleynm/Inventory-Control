import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { LoginUserController } from "../modules/users/useCases/loginUser/LoginUserController";

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", loginUserController.handle);

export {userRoutes};