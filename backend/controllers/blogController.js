const Blog = require('../model/blog');

const getAllBlog = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.json({blogs: result});
        })
        .catch((err) => {
            console.log(err);
        })
}

const getBlog = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.json({blog: result});
        })
}

const createBlog = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.json({ mess: "Create success" });
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    getAllBlog,
    getBlog,
    createBlog
}