import mongoose, { ObjectId, Schema } from "mongoose";
export interface ICheckIn {
  customer: ObjectId;
  room: ObjectId;
  remaining_pay: number;
}
const checkInModel = new Schema<ICheckIn>(
  {
    customer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "customers",
    },
    room: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "rooms",
    },
    remaining_pay: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<ICheckIn>("checkIns", checkInModel);
