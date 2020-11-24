import { shuffleArray } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum Category {
  ALL = "",
  GENERAL_KNOWLEDGE = "9",
  BOOKS = "10",
  FILM = "11",
  MUSIC = "12",
  VIDEO_GAMES = "15",
  SPORTS = "21",
  HISTORY = "23",
  POLITICS = "24",
  ART = "25",
  CELEBRITIES = "26",
  ANIMALS = "27",
  ANIME_MANGA = "31 ",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number | undefined,
  difficulty: Difficulty | undefined,
  category?: Category | undefined
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple${
    category ? "&category=" + category : ""
  }`;
  try {
    const data = await (await fetch(endPoint)).json();
    return data.results.map((q: Question) => ({
      ...q,
      answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
    }));
  } catch (err) {
    throw new Error("An error occured");
  }
};
