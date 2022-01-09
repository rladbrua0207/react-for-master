import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setToDoError("");
    setToDo(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();

  //react-hook-form이 모든 validation을 다 마쳤을 때만 호출
  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("email", { required: true })} placeholder="email" />
        <input
          {...register("username", { required: true })}
          placeholder="username"
        />
        <input
          {...register("firstName", { required: true })}
          placeholder="firstName"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short." },
          })}
          placeholder="password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short." },
          })}
          placeholder="password1"
        />
        {/* register 함수가 반환하는 객체를 가져다가 input에 props로 주는거 */}
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
