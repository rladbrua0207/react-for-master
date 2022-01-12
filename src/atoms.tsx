import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    //toDos에 모든 toDo할당, selector가 toDoState atom을 보고 있는거 atom이 변하면 selector도 변한다
    const toDos = get(toDoState);

    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ]; //배열 안에 category별로 분류된 배열 return
  },
});
