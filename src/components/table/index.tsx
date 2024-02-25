import Link from "next/link";
import { useEffect, useState } from "react";
import { userDef } from "../types";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";
import "./style.css";

export default function Table() {
  const [users, setUsers] = useState<userDef[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("/users");
    setUsers(res.data.items);
    setLoading(false);
  };

  const deleteUser = async (user: userDef) => {
    try {
      setLoading(true);
      await axios.delete(`/users/${user._uuid}`);
      fetchData();
      setLoading(false);
    } catch (error) {
      console.log("Error while deleting the user", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="container">
        <h5 className="text-center mt-2 "> Population List </h5>
        {loading && <Spinner />}
        <Link href="/add_task">
          <button className=" btn btn-primary " type="submit">
            Create
          </button>
        </Link>
        <table className="table mt-3 ">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Country</th>
              <th scope="col">More Options</th>
              {/* <th scope="col">Delete</th> */}
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
                        // role="button"

                        aria-expanded="false"
                      ></button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href={`/Edit-User/${user._uuid}`}>
                            <img src="./icons/pencil.svg" alt="Edit" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            <img
                              src="./icons/trash.svg"
                              alt="Delete"
                              onClick={() => deleteUser(user)}
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
