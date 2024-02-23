"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";

export default function Navbar() {

  return (
    <main>
      <nav
        className="navbar navbar-expand-lg p-3 "
        style={{ backgroundColor: "#9395d3" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/Users">
                  Summary
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          </div>
        </div>
      </nav>
    </main>
  );
}
