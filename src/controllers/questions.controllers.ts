import Question from "../models/questions";
import { RequestHandler } from "express";

export const getQuestions: RequestHandler = async (req, res) => {
    try {
        let questionsFound = await Question.aggregate([
            { $sample: { size: 10 } },
        ]);

        if (questionsFound.length === 0)
            return res.status(400).json({ message: "No questions found" });

        questionsFound = questionsFound.map((question, index) => ({
            ...question,
            number: index + 1,
        }));

        return res.json(questionsFound);
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
};

export const createQuestion: RequestHandler = async (req, res) => {
    try {
        const question = new Question(req.body);
        const savedQuestion = await question.save();
        return res.json(savedQuestion);
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
};
