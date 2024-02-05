"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import "./add.css";
import { taskDef } from "@/components/types";

export default function AddTask() {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const save = (event: React.SyntheticEvent) => {
    let task: taskDef = { detail, title };
    event.preventDefault();
    let tasks = [];
    if (localStorage.tasks) {
      tasks = JSON.parse(localStorage.tasks);
    }
    tasks.push(task);
    localStorage.tasks = JSON.stringify(tasks);
    console.log(task);
  };
  return (
    <main>
      <Navbar title="Add Task" backBtn={true} />
      <form onSubmit={save}>
        <div className="add-page-main-container">
          <div className="add-main-container-text">title</div>
          <div>
            <input
              type="text"
              name="title"
              className="input"
              required
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
          </div>
          <div className="add-main-container-text-detail">detail</div>
          <div>
            <input
              type="text"
              name="detail"
              className="input"
              required
              onChange={(event) => setDetail(event.currentTarget.value)}
            />
          </div>
          <div className="button-container">
            <button className="btn">ADD</button>
            <Link href="/" className="btn">
              CANCEL
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
