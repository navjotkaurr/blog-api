import express from "express";
import Blog from "../models/blogModel.js";

//@desc    Get all blog posts
//@route   GET/api/posts
//@access  Public
const getBlogs = async (req, res) => {
   try {
    const Blogs = await Blog.find({});
    res.status(200).json(posts)
   } catch (error) {
    res.status(500).json({
        message: `Server Error`
    })
   }
}

//@desc    Get all blog posts by ID
//@route   GET/api/posts/:id
//@access  Public
const getBlogByID = async(req, res) => {
    try{
        const Blog = await Blog.findById(req.params.id);

        if(post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: 'Post not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: `Server Error`
        })
    }
}

//@desc    Create new blog
//@route   POST/api/posts
//@access  Public
const createBlog = async(req, res) => {
    const { title, author, content } = req.body;

    try {
        const newBlog = new Blog({
            title,
            author,
            content
        });
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(500).json({
            message:`Server Error: Unable to create a post`
        })
    }
    
}

//@desc    Update a blog by ID
//@route   PUT/api/posts
//@access  Public
const updateBlog = async(req, res) => {
    const id = req.params.id;
    const { title, author, content } = req.body;

    try {
        const blog = await Blog.findById(id);
        if (blog) {
            blog.title = title;
            blog.author = author;
            blog.content = content;

            const updatedBlog = await blog.save();
            res.status(200).json(updatedBlog)
        } else {
            res.status(400).json({
                message: 'Blog not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error: Unable to update'
        })
    }
    
}

//@desc    Delete a blog by ID
//@route   DELETE/api/posts
//@access  Public
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if(blog) {
            await blog.remove();
            res.status(200).json({
                message: 'Blog is deleted'
            })
        } else {
            res.status(400).json({
                message: 'Blog not found'
            })
        }
    } catch(error) {
        res.json(500).json({
            messsage: 'Server Error'
        })
    }
   
}

export {
    getBlogs,
    getBlogByID,
    createBlog,
    updateBlog,
    deleteBlog
}