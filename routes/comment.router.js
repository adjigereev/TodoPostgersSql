let express = require('express');
let router = express.Router();
let Comment = require('../controllers/commentController')
/* GET users listing. */
router.post('/', Comment.addComment);
router.get('/', Comment.allComment);
router.post('/comment', Comment.addCommentOnComment);
module.exports = router;
