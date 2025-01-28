const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Fetch all posts
router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.render("index", { posts });
});

// Render form to add a post
router.get("/add", (req, res) => {
    res.render("add-post");
});

// Add a new post
router.post("/add", async (req, res) => {
    const { title, content } = req.body;
    await Post.create({ title, content });
    res.redirect("/");
});

module.exports = router;
