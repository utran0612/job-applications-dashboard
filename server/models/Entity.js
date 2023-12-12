import mongoose from "mongoose";

const EntitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    title: {
      type: String,
      required: true,
      max: 50,
    },
    status: {
      type: String,
      required: true,
      min: 5,
    },
  },
  { timestamps: true }
);

const Entity = mongoose.model("Entity", EntitySchema);
export default Entity;
