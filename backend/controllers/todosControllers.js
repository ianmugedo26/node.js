const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json({message: 'Get todos'})
});
const setTodos = (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Subject not found');
    }
    const todo = await Todo.create({
        text: res.body.text,
    });
    res.status(200).json({message: 'Set todos'})
};

const updateTodos =  asyncHandler(async(req, res) => {
    const todo = await Todo.findById(res.params.id);

    if(!todo) {
        res.status(400);
        throw new Error('Todo not Found ');

    }
    const updateTodos = await Todos.findByIdAndUpdate(req.param.id, req.body, {
        new: true;
    })
    res.status(200).json({message: `Update todos ${req.params.id}`})
});

const deleteTodos = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if(!todo) {
        res.status(400);
        throw new Error("Subject not found");
    }

    await todo.remove();

    res.status(200).json({message: `Delete todos ${req.params.id}`})
});

module.exports = {
    getTodos,
    setTodos,
    updateTodos,
    deleteTodos
};


