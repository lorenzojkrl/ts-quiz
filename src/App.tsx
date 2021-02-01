import React, {useState, useEffect} from 'react';
import {fetchQuestions} from './API';

// Components
import QuestionCard from './components/QuestionCard';

// Types
import {Difficulty, QuestionState} from './API';

// Styles
import {GlobalStyle, Wrapper} from './App.style';

export type UserAnswerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);  // get array of questions from API
  const [number, setNumber] = useState(0);  // Current user question
  const [userAnswer, setUserAnswer] = useState<UserAnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver]= useState(true);

  // console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    // Add error handling try/catch
    // const newQuestions = await fetchQuestions(
    //   TOTAL_QUESTIONS, 
    //   Difficulty.EASY
    // );

    // setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  useEffect(() => {

    const fetchData = async () => {
      const newQuestions = await fetchQuestions(
        TOTAL_QUESTIONS, 
        Difficulty.EASY
      );

      setQuestions(newQuestions);
    }
    
    fetchData()
  }, [])

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      // get user answer
      const answer = e.currentTarget.value;
      // check correct answer
      const correct = questions[number].correct_answer === answer;
      if(correct) setScore(previous => previous +1);

      // create obj with correct answer
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswer(previous => [...previous, answerObj]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  }


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quiz Ts</h1>
      {
        gameOver || userAnswer.length === TOTAL_QUESTIONS 
        ? <button className='start' onClick={startTrivia}>START</button>
        : null
      }
      {
        !gameOver 
        ? <div className='score'>Score {score}</div>
        : null
      }
      { loading && <p>Loading Questions...</p> }
      {
        !loading && !gameOver && (
          <QuestionCard 
            questionN = {number + 1}
            totalQuestion = {TOTAL_QUESTIONS}  
            question = {questions[number].question}
            answers= {questions[number].answers}
            userAnswer = {userAnswer ? userAnswer[number] : undefined}
            callback = {checkAnswer}
          />
        )
      }
      {
        !gameOver && 
        !loading && 
        userAnswer.length === number + 1 && 
        number !== TOTAL_QUESTIONS -1
        ? <button className='next' onClick={nextQuestion}> Next Question</button>
        : null
      }
     
    </Wrapper>
    </>
  );
}

export default App;
