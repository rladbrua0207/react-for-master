import { useForm } from "react-hook-form";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();
  const category = useRecoilValue(categoryState);
  const handleValid = ({ toDo }: IForm) => {
    const arr = [];
    arr.push({ text: toDo, id: Date.now(), category });
    if (localStorage.getItem("ToDos"))
      arr.push(...JSON.parse(localStorage.getItem("ToDos") as string));

    localStorage.setItem("ToDos", JSON.stringify(arr));

    setToDos(JSON.parse(localStorage.getItem("ToDos") as string));
    setValue("toDo", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateToDo;
