import mongoose, { ObjectId, Schema } from "mongoose";
export interface ICustomer {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password?: string;
}
const customerModel = new Schema<ICustomer>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<ICustomer>("customers", customerModel);
