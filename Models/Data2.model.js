const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: Date,
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

const Data2 = mongoose.model('data2', DataSchema);
module.exports = Data2;
