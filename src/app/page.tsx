"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.tasks) {
      setTasks(JSON.parse(localStorage.tasks));
    }
  }, []);
  console.log("render");
  return (
    <main>
      <Navbar title="Todo App" rightIcon="calender" />
      <div className="todo-center-container">
        <div className="todo-list-container">
          {tasks.map((task, i) => (
            <div className="todo-bar" key={task.title}>
              <div className="todo-bar-left-section">
                <div className="title">{task.title}</div>
                <div className="sub-title">{task.detail}</div>
              </div>
              <div className="todo-bar-right-section">
                <img src="./icons/pencil.svg" />
                <img src="./icons/trash.svg" />
                <img src="./icons/check-circle.svg" />
              </div>
            </div>
          ))}
          <div>
            <div className="add-todo-button">
              <Link href="/add-task" className="button">
                +
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="left-footer">
          <div>
            <img src="./icons/vector.svg" />
          </div>
          <div className="footer-text">All</div>
        </div>
        <div className="right-footer">
          <div>
            <img src="./icons/tick.svg" />
          </div>
          <div className="footer-text">Completed</div>
        </div>
      </div>
    </main>
  );
}
