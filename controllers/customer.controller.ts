import { Response, Request } from "express";
import customerModel, { ICustomer } from "../models/customer";
import bcrypt from "bcrypt";
const customerController = {
  register: async (req: Request, res: Response) => {
    const { email, first_name, last_name, phone } = req.body;
    const salt = await bcrypt.genSalt();
    const hashpass = await bcrypt.hash(req.body.password, salt);
    const body: ICustomer = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      password: hashpass,
    };
    const customer = new customerModel(body);
    await customer.save();
    res.json({
      message: "Account created successfully!",
    });
  },
  get: async (req: Request, res: Response) => {
    try {
      const customer = await customerModel.find();
      res.json({
        list: customer,
      });
    } catch (e) {
      console.log(e);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { email, first_name, last_name, phone } = req.body;
      const salt = await bcrypt.genSalt();
      const hashpass = await bcrypt.hash(req.body.password, salt);
      const body: Partial<ICustomer> = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        password: hashpass,
      };
      await customerModel.findByIdAndUpdate(id, body);
      res.json({
        message: "Customer updated successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await customerModel.findByIdAndDelete(id);
      res.json({
        message: "Customer deleted successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  },
};
export default customerController;
