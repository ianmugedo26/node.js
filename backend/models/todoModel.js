
const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value']

        },
    },
    {
        timestamps : true;

    }
);

module.export = mongoose.model('Todo', todoSchema);
