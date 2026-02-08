const express = require("express");
const connectDB = require('.config/db')
const { errorHandler } = require ('./middleware/errorMiddleware');

const port = 5000;
const app = express();
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/todos', require('./routes/todoRoutes'))
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port "${port}"`);
});

