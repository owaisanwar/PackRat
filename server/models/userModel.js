import mongoose from "mongoose";
import Pack from "./packModel.js";
import Trip from "./tripModel.js";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String },
  email: {
    type: String, required: true, lowercase: true
  },
  firebaseAuthId: { type: String },
  code: { type: String },
  trips: [{ type: Schema.Types.ObjectId, ref: Trip }],
  is_certified_guide: { type: Boolean },
  favorites: [{ type: Schema.Types.ObjectId, ref: Pack }],
});

const myDB = mongoose.connection.useDb("packratdb");

export default myDB.model("User", UserSchema);
