import { shuffleArray } from "./utils";

// Logic for fetching data from api
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;
  //   await fetching data, then await conversion to json
  const data = await (await fetch(endpoint)).json();

  //  Using spread to take all properties from Question object. Then we add more e.g. answer
  return data.results.map(
    (question: Question): QuestionState => ({
      ...question,
      // Spread answer in parameters
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    })
  );
};
