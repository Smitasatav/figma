"use client";
import { useEffect, useState } from "react";
import Form from "@/components/Form";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { userDef } from "@/components/types";
import Head from "next/head";

export default function EditUser() {
  const [loading, setLoading] = useState(true);
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
    userData();
  }, [id]);

  const pageTitle = "Edit Task";

  return (
    <main>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Form
        submitBtnLable="Update"
        title=" EDIT YOUR TASK"
        save={save}
        user={user}
        loading={loading}
      />
    </main>
  );
}
