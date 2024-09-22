import express from "express";
const router = express.Router();
import Blog from "../models/blogModel.js";
import { createBlog, 
        deleteBlog, 
        getBlogByID, 
        getBlogs, 
        updateBlog 
    } from "./blogController.js";

router.route('/').get(getBlogs).post(createBlog);
router.route('/:id').get(getBlogByID).delete(deleteBlog).put(updateBlog);

export default router;