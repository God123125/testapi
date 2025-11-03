import mongoose, { Schema, ObjectId } from "mongoose";
export interface IMovie extends Document {
  title: string;
  release_date: Date;
  poster: ObjectId;
}
const movieModel = new Schema<IMovie>(
  {
    title: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    poster: {
      type: mongoose.Types.ObjectId,
      ref: "File",
    },
  },
  { timestamps: true }
);
export default mongoose.model<IMovie>("movieShow", movieModel);
