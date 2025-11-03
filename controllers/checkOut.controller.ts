import { Request, Response } from "express";
import checkoutModel, { ICheckOut } from "../models/checkout";
import roomModel from "../models/room";
const checkOutController = {
  create: async (req: Request, res: Response) => {
    try {
      const { customer, room, remaining_pay } = req.body;
      const body: ICheckOut = {
        customer: customer,
        room: room,
        remaining_pay: remaining_pay,
      };
      const checkOut = new checkoutModel(body);
      await checkOut.save();
      const updateStatus = {
        status: "Checked Out",
      };
      await roomModel.findByIdAndUpdate(room, updateStatus);
      res.json({
        message: "CheckOut created successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const checkout = await checkoutModel.find();
      res.json({
        list: checkout,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body: Partial<ICheckOut> = req.body;
      await checkoutModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Check Out updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await checkoutModel.findByIdAndDelete(id);
      res.json({
        message: "Check Out deleted successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default checkOutController;
