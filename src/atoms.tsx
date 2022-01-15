import { atom } from "recoil";

export const todoState = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});
