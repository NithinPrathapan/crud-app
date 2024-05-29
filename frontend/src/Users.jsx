import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:3001");
      setUsers(response.data);
    };
    getUsers();
  }, []);
  return (
    <div className="flex h-screen bg-blue-400 justify-center items-center">
      <div className="flex w-[80%] flex-col gap-4 bg-white rounded p-3">
        <Link
          to="/create"
          className="bg-green-500 rounded-md p-3 max-w-[70px] text-center text-white font-semibold"
        >
          Add +
        </Link>
        <table className="">
          <thead className="">
            <tr className="border-2 rounded-sm  ">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => {
              return (
                <tr key={user._id} className="text-center ">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td className="flex justify-center items-center gap-2">
                    <Link
                      to={`update/${user._id}`}
                      className="bg-green-500 p-1 rounded-md text-white w-[60px] "
                    >
                      <button>Edit</button>
                    </Link>
                    <Link
                      to="/delete"
                      className="bg-red-500 p-1 rounded-md text-white w-[60px]"
                    >
                      <button>Delete</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
