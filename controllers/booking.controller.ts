import { Request, Response } from "express";
import bookingModel, { IBooking } from "../models/booking";
import roomModel from "../models/room";
import { IRoomType } from "../models/roomType";
const bookingController = {
  create: async (req: Request, res: Response) => {
    try {
      const { customer, booked_money, room } = req.body;
      const storeRoom = await roomModel.findById(room).populate("type");
      const remaining = (storeRoom.type as any).price - booked_money;
      const body: IBooking = {
        customer: customer,
        booked_money: booked_money,
        room: room,
        remaining_amount: remaining,
      };
      const booking = new bookingModel(body);
      await booking.save();
      const updateStatus = {
        status: "Booked",
      };
      await roomModel.findByIdAndUpdate(room, updateStatus);
      res.json({
        message: "Booking created successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const booking = await bookingModel.find().populate("customer");
      res.json({
        list: booking,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body: Partial<IBooking> = req.body;
      await bookingModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Booking updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await bookingModel.findByIdAndDelete(id);
      res.json({
        message: "Booking delete successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default bookingController;
