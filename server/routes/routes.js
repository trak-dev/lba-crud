import express from "express";
import {
  createIngredient,
  getList,
  getIngredient,
  deleteItem,
} from "../controllers/inventory.js";
const router = express.Router();

router.get("/inventory", getList);
router.get("/inventory/:id", getIngredient);
router.post("/inventory", createIngredient);
router.delete("/inventory/:id", deleteItem);

export default router;
