import mongoose, { Schema, ObjectId } from "mongoose";
export interface IRoom {
  name: string;
  type: ObjectId;
  status: string;
}
const roomModel = new Schema<IRoom>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "roomTypes",
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<IRoom>("rooms", roomModel);
