"use client";
import React, { useState } from "react";
import "./add.css";
import Form from "@/components/taskform";
import { taskDef } from "@/components/types";
import { saveTasksToLocal, getTaskFromLocal } from "@/components";
import Spinner from "@/components/Spinner";
import Navbar from "@/components/navbar";

export default function AddTask() {
  const save = (task: taskDef) => {
    let tasks = [];
    if (localStorage.tasks) {
      tasks = getTaskFromLocal();
    }
    tasks.push(task);
    saveTasksToLocal(tasks);
  };
  return (
    <main>
      <Navbar title="Add Task" backBtn={true} />
      <Form submitBtnLabel="ADD" onSave={save} />
      <Spinner />
    </main>
  );
}
