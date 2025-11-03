import express from "express";
import roomTypeController from "../controllers/roomType.controller";
const router = express.Router();
router.get("/", roomTypeController.get);
router.post("/", roomTypeController.create);
router.patch("/:id", roomTypeController.update);
router.delete("/:id", roomTypeController.delete);
export default router;
