let express = require('express');
let router = express.Router();
let Comment = require('../controllers/commentController')
const {checkUser} = require('../middleware/authmiddleware')
/* GET users listing. */
router.post('/',checkUser, Comment.addComment);
router.get('/', Comment.allComment);
router.put('/:id',checkUser, Comment.updateComment);
router.delete('/:id',checkUser, Comment.deleteComment);
module.exports = router;
