"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { taskDef } from "@/components/types";
import "./style.css";

interface props {
  submitBtnLabel: string;
  task?: taskDef;
  onSave: (task: taskDef) => void;
}

export default function Form({ submitBtnLabel, onSave, task }: props) {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  const save = (event: React.SyntheticEvent) => {
    let task: taskDef = { detail, title };
    event.preventDefault();
    onSave(task);
    router.push("/");
  };

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDetail(task.detail);
    }
  }, [task]);
  return (
    <main>
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
              value={title}
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
              value={detail}
            />
          </div>
          <div className="button-container">
            <button className="btn">{submitBtnLabel}</button>
            <Link href="/" className="btn">
              CANCEL
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
