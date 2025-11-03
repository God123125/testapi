import express from "express";
import hotelController from "../controllers/hotel.controller";
const router = express.Router();
router.get("/", hotelController.get);
router.post("/", hotelController.create);
router.patch("/:id", hotelController.update);
router.delete("/:id", hotelController.delete);
export default router;
