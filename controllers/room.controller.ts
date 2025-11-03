import { Request, Response } from "express";
import roomModel, { IRoom } from "../models/room";
import roomTypeModel from "../models/roomType";
const roomController = {
  create: async (req: Request, res: Response) => {
    try {
      const body: IRoom = {
        name: req.body.name,
        type: req.body.type,
        status: req.body.status,
      };
      const room_type = await roomTypeModel.findById(req.body.type);
      if (room_type) {
        room_type.total_room += 1;
        room_type.save();
      }
      const room = new roomModel(body);
      await room.save();
      res.json({
        message: "Room created successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const room = await roomModel.find().populate("type");
      res.json({
        list: room,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body: Partial<IRoom> = req.body;
      await roomModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Room updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await roomModel.findByIdAndDelete(id);
      res.json({
        message: "Room deleted successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default roomController;
