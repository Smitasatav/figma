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
    // Sorting users alphabetically by name
    const sortedUsers = res.data.items.sort((a: userDef, b: userDef) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sortedUsers);
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
        <h5 className="text-center mt-2">
          <b>
            <i> POPULATION LIST </i>
          </b>
        </h5>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Link href="/Add-task">
              <button className=" btn btn-primary " type="submit">
                Create
              </button>
            </Link>

            <table className="table mt-3  table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Country</th>
                  <th>More Options</th>
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
                                  style={{
                                    marginRight: "5px",
                                    filter: "invert(100%)",
                                  }}
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
                                  style={{
                                    marginRight: "5px",
                                    filter: "invert(100%)",
                                  }}
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
          </>
        )}
      </div>
    </main>
  );
}
