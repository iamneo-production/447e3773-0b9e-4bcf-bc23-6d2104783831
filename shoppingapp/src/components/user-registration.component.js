import React from "react";
import { useForm } from "react-hook-form";
import http from "../http-common";
import "../css/UserRegistration.css";

function UserRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    http.post("/users",data).then(response => console.log(response))
    .catch(error => console.error('error creating users:', error));
    window.alert("Registration Successful");
  };

  return (
    <>
      <center><p className="title">Registration Form</p></center>
      
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden"{...register("id")}/>
        <input type="text" {...register("name")} />
        
        <input type="email" {...register("email", { required: true })} />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default UserRegistration;
