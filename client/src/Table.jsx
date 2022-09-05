import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "./Axios";

function Table() {
  const deleteData = async (id) => {
    try {
      if (window.confirm("Are you sure to delete this data")) {
        let res = await Axios.delete(`/data/${id}`);
        if (res.status === 200) {
          getData();
          alert("deleted successfully");
        }
      }
    } catch (error) {
      console.log(error.response);
      alert("something went wrong");
    }
  };
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let { data } = await Axios.get("/data");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <table>
      <h1>Username and passwords</h1>
      <tr>
        <th>Username</th>
        <th>Password</th>
        <th>Created At</th>
        <th>delete</th>
      </tr>
      {data.map((item, key) => (
        <tr key={key}>
          <td>{item.username}</td>
          <td>{item.password}</td>
          <td>{item?.createdAt}</td>
          <td>
            <button onClick={(e) => deleteData(item._id)}>delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
