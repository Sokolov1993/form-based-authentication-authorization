import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { quizRequest } from '../../store/quizSlice/quizRequest';

import QuizCard from '../UI/QuizCard/QuizCard';

import classes from './Quiz.module.scss';

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizData, pending, error } = useSelector((state) => state.quizSlice);

  const fetchQuestions = () => {
    dispatch(quizRequest());
  };

  useEffect(fetchQuestions, []);

  return quizData.map((question) => (
    <fieldset key={question.id} className={`${classes.quiz}`}>
      <legend>{question.question}</legend>
      <QuizCard
        answers={question.answers}
        id={question.id}
        correct={question.correct}
      />
    </fieldset>
  ));
};

export default Quiz;
