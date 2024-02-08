import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { AppError } from "./errors/appErro";

const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  // Substitua pela origem do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

app.listen(3333, () => console.log("Server rodando na porta 3333"));