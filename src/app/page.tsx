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

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/tasks");
      setTasks(res.data.items);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
    setLoading(false);
  };

  const deleteTask = async (task: taskDef) => {
    if (task.scheduled) {
      alert(`this task ${task.title} cannot be deleted`);
      return;
    }
    try {
      setLoading(true);
      await axios.delete(`/tasks/${task._uuid}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
    setLoading(false);
  };

  const scheduledTask = async (task: taskDef) => {
    setLoading(true);
    await axios.put(`/tasks/${task._uuid}`, { scheduled: !task.scheduled });
    await fetchData();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
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
                  <Link href={`/edit-task/${task._uuid}`}>
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
