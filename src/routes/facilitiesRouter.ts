import {
  createFacility,
  getAllFacilities,
} from "../controllers/facilitiesController.js";
import { Router } from "express";

const facilitiesRouter = Router();
facilitiesRouter.post("/facilities", createFacility);
facilitiesRouter.get("/facilities", getAllFacilities);

export default facilitiesRouter;
