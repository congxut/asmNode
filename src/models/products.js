import mongoose from "mongoose";
const proSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});
export default mongoose.model("Products", proSchema);
