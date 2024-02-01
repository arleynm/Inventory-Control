import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, password } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({ name, password });

        return res.status(200).json('User registered successfully');
    
    }
}