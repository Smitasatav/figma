import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import "./edit.css";

export default function EditTask() {
  return (
    <main>
      <Navbar title="Edit Task" backBtn={true} />

      <div className="add-page-main-container"></div>
      <div className="add-main-container-text">Title</div>
      <div>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="add-main-container-text-detail">Detail</div>
      <div>
        <input type="text" name="detail" id="detail" required />
      </div>
      <div className="button-container">
        <button className="btn">Update</button>
        <Link href="/" className="btn" type="button">
          Cancel
        </Link>
      </div>
    </main>
  );
}
