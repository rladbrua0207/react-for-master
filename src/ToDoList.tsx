import React, { SelectHTMLAttributes, useEffect } from "react";
import {
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  Categories,
  categoryState,
  IToDo,
  toDoSelector,
  toDoState,
} from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDosSelector = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const setToDos = useSetRecoilState(toDoState);

  useEffect(() => {
    (async () => {})();
    setToDos(JSON.parse(localStorage.getItem("ToDos") as string));
  }, []);

  console.log(toDosSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      <h2>To Do</h2>

      {toDosSelector?.map((aToDo) => (
        <ToDo key={aToDo.id} {...aToDo} />
      ))}
    </div>
  );
}

export default ToDoList;
