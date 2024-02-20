"use client";

import Navbar from "@/components/Navbar";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main>
      <Navbar title="Users Portal" rightIcon="calender" />
      <Table />
    </main>
  );
}
