import React, { ButtonHTMLAttributes } from "react";
import { useSetRecoilState } from "recoil";
import { json } from "stream/consumers";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const handleDelete = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      localStorage.setItem(
        "ToDos",
        JSON.stringify([
          ...oldToDos.slice(0, targetIndex),
          ...oldToDos.slice(targetIndex + 1),
        ])
      );

      return JSON.parse(localStorage.getItem("ToDos") as string);
    });
  };

  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: newCategory };
      localStorage.setItem(
        "ToDos",
        JSON.stringify([
          ...oldToDos.slice(0, targetIndex),
          newToDo,
          ...oldToDos.slice(targetIndex + 1),
        ])
      );

      return JSON.parse(localStorage.getItem("ToDos") as string);
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ToDo;
