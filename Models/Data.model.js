const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [
        {
        question: "",
        comments: [
            {
            comment: "",
            }
        ]
        }
    ],
    questions2: [
        {
        question: "",
        comments: [
            {
            comment: "",
            }
        ],
        comments2: [
            {
            comment: "",
            }
        ]
        }
    ],
    questions3: [
        {
        question: "",
        comments: [
            {
            comment: "",
            }
        ]
        }
    ]
});

const Data = mongoose.model('data', DataSchema);
module.exports = Data;
