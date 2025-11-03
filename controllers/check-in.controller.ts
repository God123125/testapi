import { Request, Response } from "express";
import checkInModel, { ICheckIn } from "../models/check-in";
import roomModel from "../models/room";
const checkInController = {
  create: async (req: Request, res: Response) => {
    try {
      const { customer, room, remaining_pay } = req.body;
      const body: ICheckIn = {
        customer: customer,
        room: room,
        remaining_pay: remaining_pay,
      };
      const checkIn = new checkInModel(body);
      await checkIn.save();
      const updateStatus = {
        status: "Stay Over",
      };
      await roomModel.findByIdAndUpdate(room, updateStatus);
      res.json({
        message: "CheckIn created successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const checkIn = await checkInModel.find().populate(["customer", "room"]);
      res.json({
        list: checkIn,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body: Partial<ICheckIn> = req.body;
      await checkInModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Check In updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await checkInModel.findByIdAndDelete(id);
      res.json({
        message: "Check In deleted successfully",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default checkInController;
