"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { taskDef } from "@/components/types";
import { saveTasksToLocal, getTaskFromLocal } from "@/components";
// import * as calc from "@/components/cals";

export default function Home() {
  const [tasks, setTasks] = useState<taskDef[]>([]);

  const deleteTask = (i: number) => {
    if (tasks[i].scheduled) return alert("You cannot delete this task");

    let tasks2 = Object.assign([], tasks);
    tasks2.splice(i, 1);
    setTasks(tasks2);
    saveTasksToLocal(tasks2);
  };

  const scheduledTask = (i: number) => {
    let tasks2: taskDef[] = Object.assign([], tasks);
    tasks2[i].scheduled = !tasks2[i].scheduled;
    setTasks(tasks2);
    saveTasksToLocal(tasks2);
  };

  useEffect(() => {
    if (localStorage.tasks) {
      setTasks(getTaskFromLocal());
    }
  }, []);

  console.log("render");
  return (
    <main>
      <Navbar title="Todo App" rightIcon="calender" />
      {/* <h1>{calc.addition(5, 2)}</h1> */}
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
                <img src="./icons/trash.svg" onClick={() => deleteTask(i)} />
                <img
                  src="./icons/check-circle.svg"
                  onClick={() => scheduledTask(i)}
                  className={task.scheduled ? "scheduled" : ""}
                />
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
