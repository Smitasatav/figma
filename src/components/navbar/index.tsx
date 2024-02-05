"use client";
import "./style.css";

interface props {
  title: string;
  backBtn?: boolean;
  rightIcon?: "calender" | "battery";
}

export default function Navbar({ title, backBtn, rightIcon }: props) {
  return (
    <div className="app-bar">
      <div className="status-bar">
        <div className="left-section">9:41</div>
        <div className="right-section">
          <img src="/icons/network-signal.svg" />
          <img src="/icons/wifi-signal.svg" />
          <img src="/icons/battery.svg" />
        </div>
      </div>
      <div className="todo-page-title-bar">
        <div className="title-left-section">
          {backBtn && <img src="/icons/turn-back.svg" />}
          <div className="app-name">{title}</div>
        </div>
        <div className="title-right-section">
          {rightIcon === "calender" && (
            <img src="/icons/calander.svg" className="calander" />
          )}
        </div>
      </div>
    </div>
  );
}
