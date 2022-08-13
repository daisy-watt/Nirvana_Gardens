import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    caption: { type: String, required: true },
    postDate: { type: Date, default: new Date() },
});

export default mongoose.model("Post", postSchema);