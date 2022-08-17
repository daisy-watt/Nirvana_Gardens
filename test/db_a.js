import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://daisywatt:23Gardenia@cluster0.qn1qinl.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5002;

const connectDB = async () => {
    
    try {
        await mongoose.connect(MONGO_URI);
        const postSchema = mongoose.Schema({
            title: { type: String, required: true },
            image: { type: String, required: true },
            caption: { type: String, required: true },
            postDate: { type: Date, default: new Date() },
        });
        
        const Post = mongoose.model("Post", postSchema);
        const a = new Post(
            { 
                title: 'Post1',
                image: 'dsflkjhglskjfhdglk',
                caption: 'testing database'
            });
        await a.save();
        console.log('saved a to database');

        const a2 = await Post.find({ title: 'Post1'});
        console.log(a2);

        mongoose.disconnect();

    } catch (err) {
        console.error("connection to MongoDB failed", err.message)
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established succefully"));
mongoose.connection.on("error", () => console.log(err));