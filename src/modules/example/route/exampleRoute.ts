import express, { Router, Request, Response } from "express";
import { ExampleController } from "../controller/exampleController";

const router: Router = express.Router();
const controller: ExampleController = new ExampleController();

router.get("/", async (_req: Request, res: Response) => {
    try {
        const response = await controller.getAll();
        res.status(200).json(response);
    } catch (error:any) {
        res.status(error.statusCode || 500).json({ error: error.message || "Internal Server Error" });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const response = await controller.create(req.body);
        res.status(201).json(response);
    } catch (error:any) {
        res.status(error.statusCode || 500).json({ error: error.message || "Internal Server Error" });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    try {
        const response = await controller.getById(id);
        res.status(200).json(response);
    } catch (error:any) {
        res.status(error.statusCode || 404).json({ error: error.message || "Example not found" });
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    try {
        const response = await controller.update(id, req.body);
        res.status(200).json(response);
    } catch (error:any) {
        res.status(error.statusCode || 500).json({ error: error.message || "Internal Server Error" });
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    try {
        await controller.delete(id);
        res.status(204).send();
    } catch (error:any) {
        res.status(error.statusCode || 500).json({ error: error.message || "Internal Server Error" });
    }
});

export default router;