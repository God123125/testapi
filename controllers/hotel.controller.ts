import { Request, Response } from "express";
import hotelModel, { IHotel } from "../models/hotel";
const hotelController = {
  create: async (req: Request, res: Response) => {
    try {
      const body: IHotel = {
        name: req.body.name,
        status: req.body.status,
        address: req.body.address,
      };
      const hotel = new hotelModel(body);
      await hotel.save();
      res.json({
        message: "Hotel created successfully",
      });
    } catch (e) {
      console.log(e);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const hotel = await hotelModel.find();
      res.json({
        list: hotel,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body: Partial<IHotel> = req.body;
      await hotelModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Hotel updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await hotelModel.findByIdAndDelete(id);
      res.json({
        message: "Hotel deleted successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default hotelController;
