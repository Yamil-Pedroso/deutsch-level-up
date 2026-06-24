import { useState } from "react";
import type { ArtikelProgress, PersonalNoun } from "../types/artikel-types";

const STORAGE_KEY = "deutsch-studio:artikel-progress";

const initialProgress: ArtikelProgress = {
  favorites: [],
  mastered: [],
  personalNouns: [],
  genderCorrect: 0,
  genderAnswered: 0,
  caseCorrect: 0,
  caseAnswered: 0,
  pluralCorrect: 0,
  pluralAnswered: 0,
  adjectiveCorrect: 0,
  adjectiveAnswered: 0,
  bestSpeedScore: 0,
};

function loadProgress(): ArtikelProgress {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? { ...initialProgress, ...JSON.parse(value) } : initialProgress;
  } catch {
    return initialProgress;
  }
}

export function useArtikelProgress() {
  const [progress, setProgress] = useState<ArtikelProgress>(loadProgress);

  const update = (producer: (current: ArtikelProgress) => ArtikelProgress) => {
    setProgress((current) => {
      const next = producer(current);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const recordAnswer = (
    area: "gender" | "case" | "plural" | "adjective",
    correct: boolean,
  ) => {
    const correctKey = `${area}Correct` as const;
    const answeredKey = `${area}Answered` as const;
    update((current) => ({
      ...current,
      [correctKey]: current[correctKey] + (correct ? 1 : 0),
      [answeredKey]: current[answeredKey] + 1,
    }));
  };

  const toggleNoun = (list: "favorites" | "mastered", id: string) => {
    update((current) => ({
      ...current,
      [list]: current[list].includes(id)
        ? current[list].filter((item) => item !== id)
        : [...current[list], id],
    }));
  };

  const addPersonalNoun = (noun: PersonalNoun) => {
    update((current) => ({
      ...current,
      personalNouns: [...current.personalNouns, noun],
    }));
  };

  const removePersonalNoun = (id: string) => {
    update((current) => ({
      ...current,
      personalNouns: current.personalNouns.filter((item) => item.id !== id),
    }));
  };

  const saveSpeedScore = (score: number) => {
    update((current) => ({
      ...current,
      bestSpeedScore: Math.max(current.bestSpeedScore, score),
    }));
  };

  const resetProgress = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setProgress(initialProgress);
  };

  return {
    progress,
    recordAnswer,
    toggleNoun,
    addPersonalNoun,
    removePersonalNoun,
    saveSpeedScore,
    resetProgress,
  };
}
