import { atom, selector } from "recoil";
import ToDo from "./ToDo";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    //toDos에 모든 toDo할당, selector가 toDoState atom을 보고 있는거 atom이 변하면 selector도 변한다
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);

    //배열 안에 category별로 분류된 배열 return
  },
});
