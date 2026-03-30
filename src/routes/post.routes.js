import { Router } from "express";
const router = Router();

import { getPosts, getMyPosts, getPostById, createPost, updatePost, deletePost } from "../controllers/post.controller.js";

import auth from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

router.get("/", getPosts);
router.get("/search", getPosts);
router.get("/my-posts", auth, getMyPosts);
router.get("/:id", getPostById);

router.post("/", auth, upload.single("image"), createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;