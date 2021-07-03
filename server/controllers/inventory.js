import express from "express";
import mongoose from "mongoose";
import Inventory from "../models/inventory.js";

export const getList = async (req, res) => {
  try {
    const list = await Inventory.find();
    res.json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getIngredient = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await Inventory.findById(id);
    res.json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIngredient = async (req, res) => {
  const Item = req.body;
  try {
    const newItem = new Inventory({
      name: Item.name,
      quantity: Item.number,
      lastAdded: new Date().toISOString(),
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch {
    res.status(409).json({ message: error.message });
  }
};
export const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Inventory.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
