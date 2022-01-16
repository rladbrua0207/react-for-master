import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
} //toDoState가 단지 key이고, string을 가진 array를 가진다

export const todoState = atom<IToDoState>({
  key: "toDo",
  default: { to_do: ["a", "b"], doing: ["c", "d", "e"], done: ["f"] },
});
