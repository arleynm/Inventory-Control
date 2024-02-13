import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma/client";
import bcrypt from "bcrypt";
import { AppError } from "../../../../errors/appErro";
import { generateToken } from "./CreateToken";

export class LoginUserCase {
    async execute({ name, password }: CreateUserDTO) {
        const user = await prisma.user.findUnique({
            where: {
               name,
            },
        });

        if (!user) {
            throw new AppError("User not found!");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Incorrect password!");
        }

        const token = generateToken({ username: user.name });

        
        return {
            token,
            user: name, 
            message: 'Login successful!',
        };

    }
}