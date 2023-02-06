import { Router } from "express";
import catsRouter from "./catsRouter";

const router = Router();
router.use(catsRouter);
export default router;
