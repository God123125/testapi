import express from "express";
import roomController from "../controllers/room.controller";
const router = express.Router();
router.get("/", roomController.get);
router.post("/", roomController.create);
router.patch("/:id", roomController.update);
router.delete("/:id", roomController.delete);
export default router;
