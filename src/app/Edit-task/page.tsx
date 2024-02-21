"use client";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

export default function editUser() {
  const save = () => {};
  return (
    <main>
      <Navbar title="Edit User" backBtn={true} />
      <Form submitBtnLable="Update" onSave={save} action={""} />
    </main>
  );
}
