import express from "express";
import {
  createIngredient,
  getList,
  getIngredient,
  deleteItem,
  changeQuantity,
  getSearch,
} from "../controllers/inventory.js";
const router = express.Router();

router.get("/inventory", getList);
router.get("/inventory/:id", getIngredient);
router.get("/inventory/name/:search", getSearch);
router.post("/inventory", createIngredient);
router.delete("/inventory/:id", deleteItem);
router.patch("/inventory/:id", changeQuantity);

export default router;
