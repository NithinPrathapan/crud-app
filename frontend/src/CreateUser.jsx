import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/createUser", {
        name: name,
        email: email,
        age: age,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen bg-slate-200 justify-center items-center">
      <div className="max-w-[100%] bg-white rounded p-3">
        <form
          onSubmit={Submit}
          action=""
          className="justify-center flex flex-col items-center"
        >
          <h2 className="text-xl font-sans font-semibold text-emerald-500">
            Add User
          </h2>
          <div className="border-b-2 border-green-500 flex flex-col justify-center my-2 w-[400px]">
            <label className="" htmlFor="">
              Name
            </label>
            <input
              className="w-[60%] outline-none py-2"
              type="text"
              placeholder="Enter name"
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border-b-2 border-green-500 flex flex-col justify-center my-2 w-[400px]">
            <label className="" htmlFor="">
              Email
            </label>
            <input
              className="w-[60%] outline-none py-2"
              type="text"
              placeholder="Enter email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border-b-2 border-green-500 flex flex-col justify-center my-2 w-[400px]">
            <label className="" htmlFor="">
              Age
            </label>
            <input
              className="w-[60%] outline-none py-2"
              type="text"
              placeholder="Enter age"
              name=""
              id=""
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="bg-green-500 px-6 py-2 rounded-md my-2 text-white font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
