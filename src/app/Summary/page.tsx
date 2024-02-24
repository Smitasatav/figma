"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "@/components/api";
import { userDef } from "@/components/types";

export default function getSummary() {
  const [users, setUsers] = useState([]);
  const [countryData, setCountryData] = useState({
    male: 0,
    female: 0,
    others: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/users");
        setUsers(res.data.items);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Initialize counts
    let maleCount = 0;
    let femaleCount = 0;
    let otherCount = 0;

    // Calculate counts 
    users.forEach((user:userDef) => {
      if (user.gender === "Male") {
        maleCount++;
      } else if (user.gender === "Female") {
        femaleCount++;
      } else {
        otherCount++;
      }
    });

    // Update countryData state
    setCountryData({
      male: maleCount,
      female: femaleCount,
      others: otherCount,
    });
  }, [users]);

  return (
    <main>
      <div className="container">
        <h5 className="text-center mt-3">USER DATA</h5>
        <Link href="/" className=" d-md-flex justify-content-md-end">
          <button className=" btn btn-primary " type="submit">
            Back to Home Page
          </button>
        </Link>
        <table className="table table-bordered mt-3" style={{ width: "40%" }}>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered mt-5" style={{ width: "40%" }}>
          <thead>
            <tr>
              <th scope="col">Gender</th>
              <th scope="col">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Male</td>
              <td>{countryData.male}</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>{countryData.female}</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>{countryData.others}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
