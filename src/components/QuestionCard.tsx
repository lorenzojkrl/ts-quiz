import React from 'react';
// Types
import {UserAnswerObj} from '../App';

// Styles
import {Wrapper, ButtonWrapper} from './QuestionCard.style';
type Props = {
    question: string;
    answers: string[];
    callback: any;
    // better because we know what is the type of this callback
    // callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // Originally type any, but then I know
    // userAnswer: any;
    userAnswer: UserAnswerObj | undefined;
    questionN: number;
    totalQuestion: number;
}

// Define QuestionCard as a React Functional Component with type <Props>
// Then destructure Props
const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionN, 
    totalQuestion
}) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionN} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper 
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClick={userAnswer?.answer === answer}
                    >
                        {/* 
                            !! convert userAnswer to boolean, 
                            alternatively ternary operator returning boolean values 
                        */}
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );
};

export default QuestionCard;