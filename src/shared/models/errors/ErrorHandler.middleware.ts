import { ErrorHandler } from "./ErrorHandler.model";
import { Request, Response, NextFunction } from "express";

export function handleError(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ErrorHandler) {
        res.status(err.statusCode).json({
            status: 'error',
            statusCode: err.statusCode,
            message: err.message
        });
    } else {
        // Handle all other types of errors
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';
        res.status(statusCode).json({
            status: 'error',
            statusCode: statusCode,
            message: message
        });
    }
}