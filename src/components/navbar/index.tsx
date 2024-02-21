"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import Spinner from "../Spinner";

interface props {
  title?: string;
  backBtn?: boolean;
  rightIcon?: "calender" | "battery";
}

export default function Navbar({ title, backBtn, rightIcon }: props) {
  // const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  // const formattedTime = currentTime.toLocaleTimeString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: true,
  // });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className="app-bar">
    //   <div className="status-bar">
    //     <div className="left-section">{formattedTime}</div>
    //     <div className="right-section">
    //       <img src="/icons/network-signal.svg" />
    //       <img src="/icons/wifi-signal.svg" />
    //       <img src="/icons/battery.svg" />
    //     </div>
    //   </div>
    //   <div className="todo-page-title-bar">
    //     <div className="title-left-section">
    //       {backBtn && <img src="/icons/turn-back.svg" />}
    //       <div className="app-name">{title}</div>
    //     </div>
    //     <div className="title-right-section">
    //       {rightIcon === "calender" && (
    //         <img src="/icons/calander.svg" className="calander" />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
