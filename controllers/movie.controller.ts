import movieShow from "../models/movieShow";
import { Request, Response } from "express";
const controller = {
  create: async (req: Request, res: Response) => {
    try {
      const body = {
        title: req.body.title,
        release_date: req.body.release_date,
        poster: req.body.poster,
      };
      const movie = new movieShow(body);
      await movie.save();
      res.send({
        message: "Movie saved successfully!",
        data: movie,
      });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const movie = await movieShow.find().populate({
        path: "poster",
        select: "-data",
      });
      res.json({
        list: movie,
      });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const movie = await movieShow.findById(id);
      res.send(movie);
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const body = req.body;
      await movieShow.findByIdAndUpdate(id, body);
      res.send({
        message: "Movies updated successfully!",
      });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await movieShow.findByIdAndDelete(id);
      res.send({
        message: "Movies deleted successfully!",
      });
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  },
};
export default controller;
