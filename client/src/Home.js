import React, { useEffect, useState } from "react";
import "./Styles/Home.css";
import { useAuth } from "./Contexts/auth";
import axios from "axios";

function Home() {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/auth/getData`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res && res.data.success) {
        setUsers(res.data.existingUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="homeContainer">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{user.name}</td>
                  <td>{user.dob}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
