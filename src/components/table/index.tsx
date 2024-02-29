import Link from "next/link";
import { useEffect, useState } from "react";
import { userDef } from "../types";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";
import "./style.css";

export default function Table() {
  const [users, setUsers] = useState<userDef[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  let filteredUsers = users;
  if (searchInput.length > 0)
    filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchInput.toLowerCase());
    });

  return (
    <main>
      <div className="container">
        <h5 className="text-center mt-2 "> Population List </h5>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className=" card col-2 mb-1 mx-auto me-5">
              <input
                type="text"
                placeholder="Search items"
                value={searchInput}
                onChange={handleChange}
              ></input>
            </div>
            <Link href="/Add-User">
              <button className=" btn btn-primary " type="submit">
                Create
              </button>
            </Link>
            <table className="table mt-3 table-bordered">
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
                {filteredUsers.map((user, index) => {
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
                              <a
                                className="dropdown-item"
                                href={`/Edit-User/${user._uuid}`}
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
                              <a className="dropdown-item">
                                <img
                                  src="./icons/trash.svg"
                                  alt="Delete"
                                  style={{
                                    marginRight: "5px",
                                    filter: "invert(100%)",
                                  }}
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
          </>
        )}
      </div>
    </main>
  );
}
