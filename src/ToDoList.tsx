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
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  //react-hook-form이 모든 validation을 다 마쳤을 때만 호출
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "Server offline" });
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
        <span>{errors?.username?.message}</span>

        <input
          {...register("firstName", {
            required: true,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nico allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })} // value가 nico, nick를 포함한다면 false
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>

        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short." },
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>

        {/* required: "message", minLength:{value:? message:"message"} 
        error객체에 message 전달*/}
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short." },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>

        {/* register 함수가 반환하는 객체를 가져다가 input에 props로 주는거 */}
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
