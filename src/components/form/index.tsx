"use client";
import React, { useState } from "react";
import Link from "next/link";
import { taskDef } from "@/components/types";

interface props {
  submitBtnLable: string;
  onSave: (user: taskDef) => void;
}

export default function Form({ submitBtnLable,onSave }: props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const save = (event: React.SyntheticEvent) => {
    let user:taskDef = { name, age,gender,country};
    event.preventDefault();
    // console.log(user)
    onSave(user);
  };


  return (
    <main>
      <div className="container my-3">
        <form onSubmit={save}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                required
                // id="inputEmail3"
                placeholder="Enter your name"
                onChange={(event) => setName(event.currentTarget.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input
                type="number"
                name="age"
                className="form-control"
                required
                // id="inputPassword3"
                placeholder="Enter your age"
                onChange={(event) => setAge(event.currentTarget.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  required
                  // id="gridRadios1"
                  // defaultValue="option1"
                  // defaultChecked=""
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(event) => setGender(event.currentTarget.value)}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  required
                  // id="gridRadios2"
                  // defaultValue="option2"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(event) => setGender(event.currentTarget.value)}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Country
            </label>
            <div className="col-sm-10">
              <select
                id="inputState"
                className="form-select"
                name="country"
                required
                // value={country}
                onChange={(event) => setCountry(event.currentTarget.value)}
              >
                <option selected="">Select</option>
                <option>Australia</option>
                <option>Bhutan</option>
                <option>Canada</option>
                <option>China</option>
                <option>France</option>
                <option>India</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-4 p-4">
              <button type="submit" className="btn btn-primary">
                {submitBtnLable}
              </button>
            </div>
            <div className="col-4 p-4">
              <Link href="/">
                <button type="button" className="btn btn-primary">
                  CANCLE
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
