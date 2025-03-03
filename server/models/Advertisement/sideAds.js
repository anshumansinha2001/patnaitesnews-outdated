import { Schema, model } from "mongoose";

const sideAdsSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// create model
const SideAds = model("SideAds", sideAdsSchema);
export default SideAds;
