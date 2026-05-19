require("dotenv").config();
const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const result = await uploadFile(req.file.buffer);
        
        
        //saving data to db
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
app.get("/posts", async (req,res)=>{
    const posts = await postModel.find()

    return res.status(201).json({
        message: "Post Fetched Successfuly",
        posts
    })



})

module.exports = app;