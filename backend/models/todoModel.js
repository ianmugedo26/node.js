
const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value']

        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
    },
    {
        timestamps : true;

    }
);

module.export = mongoose.model('Todo', todoSchema);
