import type {
  BodyPart,
  ViewBoxSize,
} from "../types/human-body-hover-types";

export const humanBodyViewBox: ViewBoxSize = { w: 300, h: 600 };

export const bodyParts: BodyPart[] = [
  { id: "stirn", label: "die Stirn", trans: "la frente", x: 150, y: 85, r: 12 },
  { id: "auge", label: "das Auge", trans: "el ojo", x: 138, y: 115, r: 10 },
  { id: "ohr", label: "das Ohr", trans: "la oreja", x: 190, y: 120, r: 10 },
  { id: "nase", label: "die Nase", trans: "la nariz", x: 150, y: 125, r: 10 },
  { id: "mund", label: "der Mund", trans: "la boca", x: 150, y: 140, r: 10 },
  { id: "hals", label: "der Hals", trans: "el cuello", x: 150, y: 170, r: 12 },
  {
    id: "schulter",
    label: "die Schulter",
    trans: "el hombro",
    x: 115,
    y: 200,
    r: 12,
  },
  { id: "brust", label: "die Brust", trans: "el pecho", x: 150, y: 240, r: 12 },
  {
    id: "bauch",
    label: "der Bauch",
    trans: "el abdomen",
    x: 150,
    y: 290,
    r: 12,
  },
  {
    id: "huefte",
    label: "die Hüfte",
    trans: "la cadera",
    x: 150,
    y: 340,
    r: 12,
  },
  {
    id: "ellenbogen",
    label: "der Ellenbogen",
    trans: "el codo",
    x: 95,
    y: 265,
    r: 12,
  },
  {
    id: "handgelenk",
    label: "das Handgelenk",
    trans: "la muñeca",
    x: 85,
    y: 325,
    r: 12,
  },
  { id: "hand", label: "die Hand", trans: "la mano", x: 85, y: 350, r: 12 },
  { id: "knie", label: "das Knie", trans: "la rodilla", x: 120, y: 430, r: 14 },
  { id: "ferse", label: "die Ferse", trans: "el talón", x: 135, y: 515, r: 12 },
  { id: "fuss", label: "der Fuß", trans: "el pie", x: 140, y: 535, r: 12 },
];
