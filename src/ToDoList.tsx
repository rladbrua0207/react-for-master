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

//필수항목이 아니라면 ? 분혀주기
interface IForm {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  //react-hook-form이 모든 validation을 다 마쳤을 때만 호출
  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: {
              message: "email is required",
              value: true,
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
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
        {/* required: "message", minLength:{value:? message:"message"} 
        error객체에 message 전달*/}
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
