"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Form from "@/components/Form";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function AddTask() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const save = async (user: userDef) => {
    setLoading(true);
    const res = await axios.post("/users", [user]);
    console.log(user);
    setLoading(false);
    // document.title = "Add User";
    router.push("/");
  };

  const pageTitle = "Add User";
  const t = useTranslations("add_user");

  return (
    <main>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Form
        submitBtnLable={t("sub_label")}
        title={t("page_title")}
        save={save}
        loading={loading}
      />
    </main>
  );
}
