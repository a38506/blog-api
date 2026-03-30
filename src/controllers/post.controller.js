import Post from "../models/Post.js";

export async function createPost(req, res) {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    author: req.user.id,
    imageUrl: req.file?.path,
    tags: req.body.tags || []
  });

  res.json(post);
}

export async function getPosts(req, res) {
  const { page = 1, limit = 10, q, tag } = req.query;

  const query = {};

  if (q) {
    query.$or = [
      { title: { $regex: q, $options: "i" } },
      { content: { $regex: q, $options: "i" } }
    ];
  }

  if (tag) query.tags = tag;

  const posts = await Post.find(query)
    .populate("author", "username")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(posts);
}

export async function getPostById(req, res) {
  const post = await Post.findById(req.params.id)
    .populate("author", "username");

  if (!post) return res.status(404).json({ error: "Not found" });

  res.json(post);
}

export async function getMyPosts(req, res) {
  const posts = await Post.find({ author: req.user.id });
  res.json(posts);
}

export async function updatePost(req, res) {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ error: "Not found" });

  if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  Object.assign(post, req.body);
  await post.save();

  res.json(post);
}

export async function deletePost(req, res) {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ error: "Not found" });

  if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  await post.deleteOne();

  res.json({ message: "Deleted" });
}