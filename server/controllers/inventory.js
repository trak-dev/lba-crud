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
  const newItem = new Inventory({
    name: "test",
    quantity: 5,
    lastAdded: new Date().toISOString(),
  });
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
