import express from "express";
import {
  Addpro,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/products";
const router = express.Router();
router.get("/products", getAll);
router.get("/products/:id", getOne);
router.post("/products", Addproduct);
router.put("/products/:id", update);
router.delete("/products/:id", remove);
export default router;
