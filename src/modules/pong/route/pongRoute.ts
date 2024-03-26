import express, { Router, Request, Response } from "express";
import PongController from "../controller/pongController";



const router: Router = express.Router();
const controller: PongController = new PongController();

router.get("/", async (_req: Request, res: Response) => {
  const response: any = await controller.getMessage();
  return res.send(response);
});

router.get("/:exampleText", async (req: Request, res: Response) => {
    const response = await controller.writeMessage(req.params.exampleText);
    return res.send(response);
  });

export default router;