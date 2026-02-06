const asyncHandler = require('express-async-handler');

const getTodos = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get todos'})
});
const setTodos = (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add text field');
    }
    res.status(200).json({message: 'Set todos'})
};

const updateTodos = (req, res) => {
    res.status(200).json({message: `Update todos ${req.params.id}`})
};

const deleteTodos = (req, res) => {
    res.status(200).json({message: `Delete todos ${req.params.id}`})
};

module.exports = {
    getTodos,
    setTodos,
    updateTodos,
    deleteTodos
};


