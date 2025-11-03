import mongoose, { Schema, ObjectId } from "mongoose";
export interface ICheckOut {
  customer: ObjectId;
  room: ObjectId;
  remaining_pay: number;
}
const checkOutModel = new Schema<ICheckOut>({
  customer: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  room: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  remaining_pay: {
    type: Number,
  },
});
export default mongoose.model<ICheckOut>("checkOuts", checkOutModel);
