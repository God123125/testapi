import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { upload } from "../middleware/upload";
const router = express.Router();
const FileSchema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  data: Buffer,
  length: Number,
});
const FileModel = mongoose.model("File", FileSchema);
router.get("/", async (req, res) => {
  const file = await FileModel.find().select("-data");
  res.json({
    list: file,
  });
});
// In your route handler
router.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }
    try {
      const file = new FileModel({
        filename: req.file.originalname,
        mimetype: req.file.mimetype,
        data: req.file.buffer,
        length: req.file.size,
      });

      await file.save();
      res.status(200).send("File saved to database!");
    } catch (err) {
      res.status(500).send("Error saving file");
    }
  }
);
router.get("/:id", async (req, res) => {
  try {
    const file = await FileModel.findById(req.params.id);

    if (!file) {
      return res.status(404).send("File not found");
    }

    res.set({
      "Content-Type": file.mimetype, // just to view file on browser
      // "Content-Disposition": `attachment; filename="${file.filename}"`, somrap download
    });

    res.send(file.data);
  } catch (err) {
    res.status(500).send("Error retrieving file");
  }
});

// router.get("/", async (req: Request, res: Response) => {
//   const imgPath = await uploadModel.find();
//   res.json({
//     list: imgPath,
//   });
// });
// router.post("/create", upload.single("file"), uploadController.create);
export default router;
