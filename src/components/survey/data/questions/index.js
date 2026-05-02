/**
 * Aggregates all question modules into a single ordered array.
 */
import { incomeQuestions } from "./incomeQuestions";
import { spendingQuestions } from "./spendingQuestions";
import { emergencyQuestions } from "./emergencyQuestions";
import { debtQuestions } from "./debtQuestions";
import { savingsQuestions } from "./savingsQuestions";
import { goalsQuestions } from "./goalsQuestions";

export const ALL_QUESTIONS = [
  ...incomeQuestions,
  ...spendingQuestions,
  ...emergencyQuestions,
  ...debtQuestions,
  ...savingsQuestions,
  ...goalsQuestions,
];

/**
 * Returns questions filtered by section ID.
 */
export function getQuestionsBySection(sectionId) {
  return ALL_QUESTIONS.filter((q) => q.sectionId === sectionId);
}
