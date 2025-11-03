import mongoose, { Schema } from "mongoose";
export interface IHotel {
  name: string;
  status: boolean;
  address: string;
}
const hotelModel = new Schema<IHotel>(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<IHotel>("hotels", hotelModel);
