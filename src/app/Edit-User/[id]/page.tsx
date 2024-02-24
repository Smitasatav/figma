"use client";
import Form from "@/components/form";
import axios from "@/components/api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { userDef } from "@/components/types";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

export default function editUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<userDef>({
    name: "",
    age: "",
    gender: "",
    country: "",
  });
  let { id } = useParams();
  const router = useRouter();

  let userData = async () => {
    setLoading(true);
    let res = await axios.get(`/users/${id}`);
    setUser(res.data);
    setLoading(false);
  };

  let save = async (user: userDef) => {
    setLoading(true);
    await axios.put(`/users/${id}`, user);
    setLoading(false);
    router.push("/");
  };
  useEffect(() => {
    setLoading(true);
    userData();
    setLoading(false);
  }, [id]);
  return (
    <main>
      {loading?<Spinner/>:(
        <Form
          submitBtnLable="Update"
          title="EDIT USER"
          onSave={save}
          user={user}
        />
      )}
    </main>
  );
}
