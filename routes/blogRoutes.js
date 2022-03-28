const express = require('express');

const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/',blogController.blog_index);
router.post('/',blogController.blog_create_post);
router.get('/create',blogController.blog_create_get);
router.get('/:routeparameter',blogController.blog_get_id)
router.delete('/:routeparameter',blogController.blog_delete_post)

module.exports = router;