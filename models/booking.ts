import mongoose, { ObjectId, Schema } from "mongoose";
export interface IBooking {
  customer: ObjectId;
  booked_money: number;
  room: ObjectId;
  remaining_amount: number;
}
const bookingModel = new Schema<IBooking>(
  {
    customer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "customers",
    },
    booked_money: {
      type: Number,
      required: true,
    },
    room: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "rooms",
    },
    remaining_amount: {
      type: Number,
    },
  },
  { timestamps: true }
);
export default mongoose.model<IBooking>("bookings", bookingModel);
