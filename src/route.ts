import express, { Router } from "express";
import pingRoute from "./modules/ping/route/pingRoute";
import pongRoute from "./modules/pong/route/pongRoute";
import exampleRoute from "./modules/example/route/exampleRoute";

const router: Router = express.Router();

router.use("/ping", pingRoute);
router.use("/pong", pongRoute);
router.use("/examples", exampleRoute);

export default router;