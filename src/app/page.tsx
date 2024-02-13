"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";

export default function Home() {
  const [tasks, setTasks] = useState<taskDef[]>([]);
  const [loading, setLoading] = useState(false);

  const deleteTask = async (task: taskDef) => {
    setLoading(true);
    if (task.scheduled) {
      alert(`this task ${task.title} cannot be deleted`);
      return;
    }
    try {
      await axios.delete(`/tasks/${task._id}`);
      const res = await axios.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
    setLoading(false);
  };

  const scheduledTask = async (task: taskDef) => {
    setLoading(true);
    let task2 = Object.assign({}, task);
    task2.scheduled = !task2.scheduled;
    delete task2._id;
    await axios.put(`/tasks/${task._id}`, task2);
    let res = await axios.get(`/tasks`);
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await axios.get("/tasks");
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
                    onClick={() => deleteTask(task)}
                  />
                  <img
                    src="./icons/check-circle.svg"
                    onClick={() => scheduledTask(task)}
                    className={task.scheduled ? "scheduled" : ""}
                  />
                </div>
              </div>
            ))}

            <div className="add-todo-button">
              <Link href="/add-task" className="button">
                +
              </Link>
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
