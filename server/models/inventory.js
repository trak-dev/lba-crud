import mongoose from "mongoose";
const inventorySchema = mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  lastAdded: { type: Date, required: true },
});
export default mongoose.model("Inventory", inventorySchema);
