"use client";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import axios from "@/components/api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { taskDef } from "@/components/types";
import { useEffect, useState } from "react";

export default function editUser() {
  const [user, setUser] = useState<taskDef>({
    name: "",
    age: "",
    gender: "",
    country: "",
  });
  let { id } = useParams();
  const router = useRouter();

  let getData = async () => {
    let res = await axios.get(`/users/${id}`);
    setUser(res.data);
  };

  let save = async (user: taskDef) => {
    await axios.put(`/users/${id}`, user);
    router.push("/");
  };
  useEffect(() => {
    document.title = "Edit Data";
    getData();
  }, [id]);
  return (
    <main>
      <Navbar />
      <Form
        submitBtnLable="Update"
        action="EDIT USER"
        onSave={save}
        user={user}
      />
    </main>
  );
}
