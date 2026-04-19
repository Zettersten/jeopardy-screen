import currentGameJson from "../../data/games/current.json";

export interface Question {
  points: number;
  question: string;
  answer: string;
  revealed: boolean;
}

export interface Category {
  name: string;
  questions: Question[];
}

export interface BoardGameMetadata {
  createdBy: string;
  occasion?: string;
  targetAudience?: string;
  topics: string[];
}

export interface BoardGame {
  id: string;
  title: string;
  date: string;
  description: string;
  columns: number;
  rows: number;
  pointValues: number[];
  categories: Category[];
  metadata: BoardGameMetadata;
}

export const gameData = currentGameJson as BoardGame;
export const { categories } = gameData;
