import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = async () => {
      const response = await axios.get(`http://localhost:3001/getUser/${id}`);
      setname(response.data.name);
      setage(response.data.age);
      setemail(response.data.email);
    };
    updateUser();
  }, []);

  const Update = (e) => {
    e.preventDefault();
    try {
      let response = axios.put("http://localhost:3001/updateUser/" + id, {
        name: name,
        email: email,
        age: age,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen bg-slate-200 justify-center items-center">
      <div className="max-w-[100%] bg-white rounded p-3">
        <form
          action=""
          onSubmit={Update}
          className="justify-center flex flex-col items-center"
        >
          <h2 className="text-xl font-sans font-semibold text-emerald-500">
            Update User
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
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
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
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
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
              value={age}
              onChange={(e) => {
                setage(e.target.value);
              }}
            />
          </div>
          <button className="bg-green-500 px-6 py-2 rounded-md my-2 text-white font-semibold">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
