import React, { Fragment, useState } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import classes from './QuizCard.module.scss';

const QuizCard = ({ answers, id, correct }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);

  const answerCheck = <h2>{selectedAnswer ? 'Correct' : 'Incorrect'}</h2>;
  const buttonText =
    showRightAnswer && radioChecked ? 'Hide answer' : 'Check answer';

  const onInputChangeHandler = (event) => {
    const isAnswerTrue = correct.trim() === event.target.value.trim();
    setRadioChecked(event.target.checked);

    setSelectedAnswer(isAnswerTrue);
  };

  const onClickCheckAnswer = () => {
    setShowRightAnswer((prevState) => !prevState);
  };

  return (
    <Fragment>
      {answers.map((answer, index) => (
        <div key={`${index}`}>
          <Input
            type="radio"
            className="quizRadioInput"
            label={answer}
            htmlFor={`${index}`}
            id={`${index}`}
            name={id}
            value={answer}
            onChange={onInputChangeHandler}
          />
        </div>
      ))}
      <div className={classes.button}>
        {showRightAnswer && radioChecked && answerCheck}
        <Button
          disabled={!radioChecked}
          className="button"
          onClick={onClickCheckAnswer}
        >
          {buttonText}
        </Button>
      </div>
    </Fragment>
  );
};

export default QuizCard;
