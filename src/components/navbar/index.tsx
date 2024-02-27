"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {

  return (
    <main>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            User Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/Summary">
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
