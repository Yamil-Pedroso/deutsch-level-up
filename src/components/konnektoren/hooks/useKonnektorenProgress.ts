import { useState } from "react";
import type { KonnektorenProgress } from "../types/konnektoren-types";

const STORAGE_KEY = "deutsch-studio:konnektoren-progress";

const initialProgress: KonnektorenProgress = {
  favorites: [],
  mastered: [],
  review: [],
  quizCorrect: 0,
  quizAnswered: 0,
  completedActivities: [],
};

function readProgress(): KonnektorenProgress {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...initialProgress, ...JSON.parse(saved) } : initialProgress;
  } catch {
    return initialProgress;
  }
}

export function useKonnektorenProgress() {
  const [progress, setProgress] = useState<KonnektorenProgress>(readProgress);

  const updateProgress = (
    updater: (current: KonnektorenProgress) => KonnektorenProgress,
  ) => {
    setProgress((current) => {
      const next = updater(current);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const toggleListItem = (
    list: "favorites" | "mastered" | "review",
    id: string,
  ) => {
    updateProgress((current) => {
      const exists = current[list].includes(id);
      const nextList = exists
        ? current[list].filter((item) => item !== id)
        : [...current[list], id];

      return {
        ...current,
        [list]: nextList,
        ...(list === "mastered" && !exists
          ? { review: current.review.filter((item) => item !== id) }
          : {}),
        ...(list === "review" && !exists
          ? { mastered: current.mastered.filter((item) => item !== id) }
          : {}),
      };
    });
  };

  const recordQuizAnswer = (correct: boolean) => {
    updateProgress((current) => ({
      ...current,
      quizAnswered: current.quizAnswered + 1,
      quizCorrect: current.quizCorrect + (correct ? 1 : 0),
    }));
  };

  const completeActivity = (id: string) => {
    updateProgress((current) => ({
      ...current,
      completedActivities: current.completedActivities.includes(id)
        ? current.completedActivities
        : [...current.completedActivities, id],
    }));
  };

  const resetProgress = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setProgress(initialProgress);
  };

  return {
    progress,
    toggleListItem,
    recordQuizAnswer,
    completeActivity,
    resetProgress,
  };
}
