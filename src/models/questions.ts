import { Schema, model } from "mongoose";

const answerSchema = new Schema(
    {
        text: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
    },
    { versionKey: false, timestamps: true }
);

const questionSchema = new Schema(
    {
        text: { type: String, required: true },
        answers: [answerSchema],
    },
    { timestamps: true, versionKey: false }
);

export default model("Question", questionSchema);
