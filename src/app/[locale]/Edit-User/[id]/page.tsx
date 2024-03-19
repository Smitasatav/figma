"use client";
import axios from "@/components/api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { userDef } from "@/components/types";
import { useEffect, useState } from "react";
import Head from "next/head";
import Spinner from "@/components/Spinner";
import UserForm from "@/components/form";
import { useTranslations } from "next-intl";

export default function editUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<userDef>({
    name: "",
    age: "",
    gender: "",
    country: "",
  });
  let { id } = useParams();
  const router = useRouter();

  let fetchData = async () => {
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
    fetchData();
  }, [id]);

  const t = useTranslations("edit_user");

  return (
    <main>
      <title>{t("page_title")}</title>
      {/* {loading?<Spinner/>:( */}
      <UserForm
        submitBtnLable={t("sub_leble")}
        title={t("page_title")}
        save={save}
        user={user}
        loading={loading}
      />
      {/* )} */}
    </main>
  );
}
