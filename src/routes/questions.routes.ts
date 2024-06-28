import { Router } from "express";
import *as questionsCtrl from '../controllers/questions.controllers';

const router = Router();

router.get('/questions', questionsCtrl.getQuestions);
router.post('/questions', questionsCtrl.createQuestion);


export default router;