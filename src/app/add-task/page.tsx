"use client";
import React, { useState } from "react";

import Navbar from "@/components/navbar";
import "./add.css";

import Form from "@/components/taskform";

export default function AddTask() {
  return (
    <main>
      <Navbar title="Add Task" backBtn={true} />
      <Form submitBtnLabel="ADD" />
    </main>
  );
}
