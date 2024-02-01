import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/appErro";
import bcrypt from "bcrypt";

export class CreateUserUseCase {
    async execute({ name, password }: CreateUserDTO): Promise<User> {

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                name,
            },
        });

        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
            },
        });

    
        return user;
        
    }
}