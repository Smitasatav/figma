import Link from "next/link";
import { useEffect, useState } from "react";
import { taskDef } from "../types";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";

export default function Table() {
  const [users, setUsers] = useState<taskDef[]>([]);
  const [loading,setLoading] = useState(false);

  const deleteUser = async (user: taskDef) => {
    try{
      setLoading(true);
      await axios.delete(`/users/${user._uuid}`)
      let res=await axios.get("/users");
      setUsers(res.data.items);
      setLoading(false);
    }catch(error){
      console.log("Error while deleting the user", error);
    }
  }

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
        <h5 className="text-center mt-2 "> Population List </h5>
        {/* {loading && <Spinner/>} */}
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
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => {
              return (
                <tr key={index}>
                  <td>{(index+1)}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.country}</td>
                  <td>
                    <Link href={`/Edit-User/${user._uuid}`}>
                      <img src="./icons/pencil.svg" />
                    </Link>
                  </td>
                  <td>
                    <Link href="">
                      <img src="./icons/trash.svg" onClick={()=>deleteUser(user)} />
                    </Link>
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
