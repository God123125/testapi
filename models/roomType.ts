import mongoose, { Schema, ObjectId } from "mongoose";
export interface IRoomType {
  name: string;
  image: ObjectId;
  hotel: ObjectId;
  status: boolean;
  total_room?: number;
  price: number;
}
const roomTypeModel = new Schema<IRoomType>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "File",
    },
    hotel: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "hotels",
    },
    status: {
      type: Boolean,
      required: true,
    },
    total_room: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<IRoomType>("roomTypes", roomTypeModel);
