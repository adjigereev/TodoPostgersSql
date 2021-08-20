var express = require('express');
var router = express.Router();
let Todos = require('../controllers/todoController')
/* GET users listing. */
router.post('/', Todos.addTodo);
router.get('/', Todos.allTodo);
router.put('/:id',Todos.editTodo)
router.delete('/:id',Todos.deleteTodo)
module.exports = router;
