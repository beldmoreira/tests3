import { Router } from "express";
import catsRouter from "./catsRouter.js";
import facilitiesRouter from "./facilitiesRouter.js";

const router = Router();
router.use(catsRouter);
router.use(facilitiesRouter);
export default router;
