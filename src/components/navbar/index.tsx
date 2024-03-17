"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {Link} from "@/i18n";
import LocalSwitcher from "../locale-switcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu=()=>{
    setMenuOpen(false);
  }
  const t = useTranslations("Navbar");
  return (
    <nav className="navbar navbar-dark bg-dark mb-3" >
      <div className="container-fluid">
      <div className="d-flex justify-content-start">
        <Link className="navbar-brand" href="/">
          {t("heading")}
        </Link>
        <div>
          <Link className="pt-2" href="/">
            <LocalSwitcher />
          </Link>
          </div>
        </div>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`offcanvas offcanvas-end text-bg-dark ${
            menuOpen ? "show" : ""
          }`}
          tabIndex={-1}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">
            {t("nav_title")}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={toggleMenu}
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link active" href="/">
                {t("nav_home")}
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link active" href="/Summary">
                {t("nav_summary")}
                </Link>
              </li>
              {/* <li className="nav-item" >
                <Link className="nav-link active" href="/">
                <LocalSwitcher/>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
