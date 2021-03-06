import * as React from 'react';
import { Quiz as Props } from '../../types';
import Points from '../Points';
import CurrentQuestion from '../containers/CurrentQuestion';
import NextQuestionButton from '../containers/NextQuestionButton';
import ResetButton from '../containers/ResetButton';
import './Quiz.css';

const Quiz = ({ currentQuestionIndex, points, possiblePoints, answeredCorrectly, ended }: Props) => {
    if (ended) {
        return (
            <div className="quiz ended">
                <p>Thanks for playing! You got {points} points out of a possible {possiblePoints}.</p>
                <ResetButton text="Play again?" />
            </div>
        );
    }
    const pointsComponent = currentQuestionIndex === 0 ? null : <Points current={points} possible={possiblePoints} />;

    const nextButton = answeredCorrectly ? <NextQuestionButton text="Next" /> : null;

    return (
        <div className="quiz">
            {pointsComponent}
            <CurrentQuestion />
            {nextButton}
        </div>
    );
};

export default Quiz;