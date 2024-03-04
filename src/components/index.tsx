import { userDef } from "@/components/types";

export let saveTasksToLocal = (tasks: userDef[]) => {
  localStorage.tasks = JSON.stringify(tasks);
};

export let getTaskFromLocal = () => {
  return JSON.parse(localStorage.tasks);
};
