import { Request, Response } from "express";
import { LoginUserCase } from "./LoginUserCase";

export class LoginUserController{
    async handle(req: Request, res: Response) {
        const { name, password } = req.body;

        const loginUserCase = new LoginUserCase();

        const result = await loginUserCase.execute({ name, password });

        return res.status(200).json(result);
    
    }
}

