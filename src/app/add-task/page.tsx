"use client";
import React, { useState } from "react";
import axios from "axios";
import Form from "@/components/taskform";
import { taskDef } from "@/components/types";
import { saveTasksToLocal, getTaskFromLocal } from "@/components";
import Spinner from "@/components/Spinner";
import Navbar from "@/components/navbar";

export default function AddTask() {
  const [loading, setLoading] = useState(false);
  const save = async (task: taskDef) => {
    setLoading(true);
    const res = await axios.post(
      "https://crudcrud.com/api/78b95180ef784e6e8079556bef396f7c/task",
      task
    );

    setLoading(false);
  };
  return (
    <main>
      <Navbar title="Add Task" backBtn={true} />
      <Form submitBtnLabel="ADD" onSave={save} />
      {loading && <Spinner />}
    </main>
  );
}
