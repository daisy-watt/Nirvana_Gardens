// node modules
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// local files
import postsRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());
app.use("/posts", postsRoutes);

const MONGO_URI = "mongodb+srv://daisywatt:23Gardenia@cluster0.qn1qinl.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
    
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
    } catch (err) {
        console.error("connection to MongoDB failed", err.message)
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established succefully"));
mongoose.connection.on("error", () => console.log(err));