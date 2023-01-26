const express = require('express');
const router = express.Router();
const BlogController = require('../../controller/blogController');

router.post('/blog', BlogController.create);
router.delete('/blog/:id', BlogController.destroy);
router.get('/blog/:id', BlogController.get);
router.patch('/blog/:id', BlogController.update)
router.get('/blog',BlogController.getAll);

module.exports = router;