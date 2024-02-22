import Link from "next/link";
import { useEffect, useState } from "react";
import { taskDef } from "../types";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";
import "./style.css";

export default function Table() {
  const [users, setUsers] = useState<taskDef[]>([]);
  const [loading, setLoading] = useState(false);

  const deleteUser = async (user: taskDef) => {
    try {
      setLoading(true);
      await axios.delete(`/users/${user._uuid}`);
      console.log("smita");
      let res = await axios.get("/users");
      setUsers(res.data.items);
      setLoading(false);
    } catch (error) {
      console.log("Error while deleting the user", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/users");
      setUsers(res.data.items);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="container">
        <h5 className="text-center mt-2">
          <b>
            {" "}
            <i> Population List </i>
          </b>
        </h5>

        <table className="table mt-3 table-bordered">
          <thead className="table">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Country</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.country}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        aria-expanded="false"
                      ></button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href={`/Edit-task/${user._uuid}`}
                          >
                            <img
                              src="./icons/pencil.svg"
                              alt="Edit"
                              className="img"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => deleteUser(user)}
                          >
                            <img
                              src="./icons/trash.svg"
                              alt="delete"
                              className="img"
                            />
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link href="/Add-task">
          <button className=" btn btn-outline-primary " type="submit">
            Create
          </button>
        </Link>
      </div>
    </main>
  );
}
