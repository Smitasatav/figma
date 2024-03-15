"use client";
import React, { useState } from "react";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import { useRouter } from "next/navigation";
import Head from "next/head";
import UserForm from "@/components/form";
import { useTranslations } from "next-intl";

export default function AddUser() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const save = async (user: userDef) => {
    setLoading(true);
    const res = await axios.post("/users", [user]);
    console.log(user);
    setLoading(false);
    router.push("/");
  };

  const t = useTranslations("add_user");


  return (
    <main>
     
        <title>{t("page_title")}</title>
      
      <UserForm
        submitBtnLable={t("sub_leble")}
        title={t("page_title")}
        save={save}
        loading={loading}
      />
    </main>
  );
}
