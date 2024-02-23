"use client";
import React, { useEffect, useState } from "react";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import Table from "@/components/Table";
import Spinner from "@/components/Spinner";

interface props {
  submitBtnLable?: string;
  action?: string;

  onDataSorted: (sortedData: userDef[]) => void;
}

export default function Form({ submitBtnLable, action, onDataSorted }: props) {
  const [users, setUsers] = useState<userDef[]>([]);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/users");
        const sortedUsers = res.data.items.sort((a: userDef, b: userDef) => {
          const ageA = parseInt(a.age);
          const ageB = parseInt(b.age);

          if (ageA !== ageB) {
            return ageA - ageB;
          }
          if (a.gender !== b.gender) {
            return a.gender.localeCompare(b.gender);
          }
          return a.country.localeCompare(b.country);
        });
        setUsers(sortedUsers);
        onDataSorted(sortedUsers);
      } catch (error) {
        console.log("Error while fetching users", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (age.trim() !== "" && gender.trim() !== "" && country.trim() !== "") {
      setShowTable(true);
    } else {
    }
  };
  return (
    <main>
      <div className="container my-3">
        <h3 className="text-center">{action}</h3>
        {!loading && (
          <form className="mt-4">
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
                  value={age}
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
                  value={country}
                  onChange={(event) => setCountry(event.currentTarget.value)}
                >
                  <option>Select</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>Denmark</option>
                  <option>South Africa</option>
                  <option>Germany</option>
                  <option>Barcelona</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-4 p-4">
                <button type="submit" className="btn btn-outline-primary">
                  {/* {submitBtnLable} */}GO
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      {loading && <Spinner />}
    </main>
  );
}
