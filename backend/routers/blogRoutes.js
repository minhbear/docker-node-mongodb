const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlog);
router.get('/:id', blogController.getBlog);
router.post('/create', blogController.createBlog);

module.exports = router;