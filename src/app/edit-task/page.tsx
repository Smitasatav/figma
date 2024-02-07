import React from "react";
import Navbar from "@/components/navbar";
import "./edit.css";
import Form from "@/components/taskform";

export default function EditTask() {
  return (
    <main>
      <Navbar title="Edit Task" backBtn={true} />
      <Form submitBtnLabel="UPDATE" />
    </main>
  );
}
