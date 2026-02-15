const express = require('express');
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

const { getTodos, setTodos, updateTodos, deleteTodos } = require ('../controllers/todosControllers')

router.route("/").get(protect, getTodos).post(protect, setTodos);
router.route("/:id").put(protect, updateTodos).delete(protect, deleteTodos);
router.route('/').get(getTodos).post(setTodos);
router.route('/:id').put(updateTodos).delete(deleteTodos);

module.exports = router;
