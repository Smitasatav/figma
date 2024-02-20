import Link from "next/link";
import { useEffect, useState } from "react";
import { taskDef } from "../types";
import axios from "@/components/api";

export default function Table() {
  const [users, setUsers] = useState<taskDef[]>([]);

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
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Country</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.country}</td>
                  <td>
                    <Link href="/Edit-task">
                      <img src="./icons/pencil.svg" />
                    </Link>
                  </td>
                  <td>
                    <Link href="">
                      <img src="./icons/trash.svg" />
                    </Link>
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
