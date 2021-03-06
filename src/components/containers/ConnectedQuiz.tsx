import { connect } from 'react-redux';
import Quiz from '../Quiz';
import { AppState } from '../../types';

const mapStateToProps = (state: AppState) => {
    const { currentQuestionIndex, points, answeredCorrectly } = state;
    return {
        currentQuestionIndex,
        points,
        possiblePoints: currentQuestionIndex * 3,
        answeredCorrectly,
        ended: currentQuestionIndex === state.questions.length ? true : false
    };
};

export default connect(
    mapStateToProps,
    null
)(Quiz);