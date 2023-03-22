import express from "express";
import mongoose from "mongoose";
import productRouter from "./router/products";
const app = express();
app.use(express.json());
app.use("/api", productRouter);
mongoose.connect("mongodb://localhost:27017/asmnode");
export const viteNodeApp = app;
