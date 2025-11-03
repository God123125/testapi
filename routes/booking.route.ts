import express from "express";
import bookingController from "../controllers/booking.controller";
const router = express.Router();
router.get("/", bookingController.get);
router.post("/", bookingController.create);
router.patch("/:id", bookingController.update);
router.delete("/:id", bookingController.delete);
export default router;
