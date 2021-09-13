let express = require('express');
let router = express.Router();
let Todos = require('../controllers/todoController')
const {checkUser} = require('../middleware/authmiddleware')

router.post('/', checkUser,Todos.addTodo);
router.get('/', Todos.allTodo);
router.put('/:id', Todos.editTodo)
router.delete('/:id',checkUser, Todos.deleteTodo)
module.exports = router;
