"use client";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
import Table from "@/components/table";
import AddTask from "./add_task/page";

export default function Home() {
  return (
    <main>
    <Navbar title="Users Portal" rightIcon="calender"/>
    <Table/>
    </main>
  );
}
