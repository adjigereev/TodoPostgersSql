let express = require('express');
let router = express.Router();
let Comment = require('../controllers/commentController')
const {checkUser, checkRestriction} = require('../middleware/authmiddleware')
const {comment} = require("../db/todo.model");
/* GET users listing. */
router.post('/',checkUser, Comment.addComment);
router.get('/', Comment.allComment);
router.put('/:id',checkUser,checkRestriction(comment), Comment.updateComment);
router.delete('/:id',checkUser,checkRestriction(comment), Comment.deleteComment);
module.exports = router;
