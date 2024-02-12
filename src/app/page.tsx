"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { taskDef } from "@/components/types";
import { saveTasksToLocal, getTaskFromLocal } from "@/components";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [tasks, setTasks] = useState<taskDef[]>([]);
  const [loading, setLoading] = useState(false);

  const deleteTask = (i: string) => {
    // if (tasks[i].scheduled) return alert("You cannot delete this task");
    // let tasks2 = Object.assign([], tasks);
    // tasks2.splice(i, 1);
    // setTasks(tasks2);
    // saveTasksToLocal(tasks2);
  };

  const scheduledTask = (i: string) => {
    // let tasks2: taskDef[] = Object.assign([], tasks);
    // tasks2[i].scheduled = !tasks2[i].scheduled;
    // setTasks(tasks2);
    // saveTasksToLocal(tasks2);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await axios.get(
        "https://crudcrud.com/api/78b95180ef784e6e8079556bef396f7c/task"
      );
      setTasks(res.data);
      setLoading(false);
    })();
  }, []);

  return (
    <main>
      <Navbar title="Todo App" rightIcon="calender" />
      {loading && <Spinner />}
      {!loading && (
        <div className="todo-center-container">
          <div className="todo-list-container">
            {tasks.map((task) => (
              <div className="todo-bar" key={task.title}>
                <div className="todo-bar-left-section">
                  <div className="title">{task.title}</div>
                  <div className="sub-title">{task.detail}</div>
                </div>
                <div className="todo-bar-right-section">
                  <Link href={`/edit-task/${task._id}`}>
                    <img src="./icons/pencil.svg" />
                  </Link>
                  <img
                    src="./icons/trash.svg"
                    onClick={() => deleteTask(task._id)}
                  />
                  <img
                    src="./icons/check-circle.svg"
                    onClick={() => scheduledTask(task._id)}
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
      )}
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
