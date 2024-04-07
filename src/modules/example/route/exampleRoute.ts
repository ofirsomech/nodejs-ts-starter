import express, { Router, Request, Response, NextFunction } from "express";
import { ExampleController } from "../controller/exampleController";
import { handleError } from "../../../shared/models/errors/ErrorHandler.middleware";
import { ErrorHandler } from "../../../shared/models/errors/ErrorHandler.model";

const router: Router = express.Router();
const controller: ExampleController = new ExampleController();

// Add the ErrorHandler middleware to the router middleware chain
router.use(handleError);

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await controller.getAll();
        res.status(200).json(response);
    } catch (error:any) {
        next(new ErrorHandler(error.statusCode || 500, error.message || "Internal Server Error"));
    }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await controller.create(req.body);
        res.status(201).json(response);
    } catch (error:any) {
        next(new ErrorHandler(error.statusCode || 500, error.message || "Internal Server Error"));
    }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id);
    try {
        const response = await controller.getById(id);
        res.status(200).json(response);
    } catch (error:any) {
        next(new ErrorHandler(error.statusCode || 404, error.message || "Example not found"));
    }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id);
    try {
        const response = await controller.update(id, req.body);
        res.status(200).json(response);
    } catch (error:any) {
        next(new ErrorHandler(error.statusCode || 500, error.message || "Internal Server Error"));
    }
});

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const id: number = parseInt(req.params.id);
    try {
        await controller.delete(id);
        res.status(204).send();
    } catch (error:any) {
        next(new ErrorHandler(error.statusCode || 500, error.message || "Internal Server Error"));
    }
});

export default router;