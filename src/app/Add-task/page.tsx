"use client";
import React, { useState, useEffect } from "react";
import Form from "@/components/Form";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import Spinner from "@/components/Spinner";
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
    router.push("/");
  };

  const pageTitle = "Add Task";

  return (
    <main>
      <head>
        <title>{pageTitle}</title>
      </head>
      {!loading ? (
        <Form submitBtnLable="ADD" title="ADD USER" onSave={save} />
      ) : (
        <div className="main">
          <Spinner />
        </div>
      )}
    </main>
  );
}
