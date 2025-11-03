import { Request, Response } from "express";
import roomTypeModel, { IRoomType } from "../models/roomType";
const roomTypeController = {
  create: async (req: Request<{}, {}, IRoomType>, res: Response) => {
    try {
      const body: IRoomType = {
        name: req.body.name,
        image: req.body.image,
        hotel: req.body.hotel,
        status: req.body.status,
        price: req.body.price,
      };
      const roomType = new roomTypeModel(body);
      await roomType.save();
      res.status(200).json({
        message: "Room Type created successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const roomType = await roomTypeModel.find().populate([
        "hotel",
        {
          path: "image",
          select: "-data",
        },
      ]);
      res.json({
        list: roomType,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body = req.body;
      await roomTypeModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Room Type updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await roomTypeModel.findByIdAndDelete(id);
      res.json({
        message: "Room Type deleted successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default roomTypeController;
