let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const sequelize = require('./db/config')
let commentRouter = require('./routes/comment.router');
let todosRouter = require('./routes/todo.router');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/comment', commentRouter);
app.use('/todos', todosRouter);




sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("Сервер запущен");
        console.log('Бд подключена');
    })
})

