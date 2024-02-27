"use client";
import React, { useEffect, useState } from "react";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import Head from "next/head";

export default function getSummary() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<userDef[]>([]);
  const [countryCounts, setCountryCounts] = useState<{ [key: string]: number }>(
    {}
  );
  const [countryData, setCountryData] = useState({
    male: 0,
    female: 0,
    others: 0,
  });

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("/users");
    setUsers(res.data.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Initialize counts
    let maleCount = 0;
    let femaleCount = 0;
    let otherCount = 0;

    // Calculate counts

    users.forEach((user: userDef) => {
      if (user.gender === "Male") {
        maleCount++;
      } else if (user.gender === "Female") {
        femaleCount++;
      } else {
        otherCount++;
      }
    });

    // Update countryData
    setCountryData({
      male: maleCount,
      female: femaleCount,
      others: otherCount,
    });

    const counts: { [key: string]: number } = {};
    users.forEach((user) => {
      counts[user.country] = (counts[user.country] || 0) + 1;
    });
    setCountryCounts(counts);
  }, [users]);

  const pageTitle = "Summary";

  return (
    <main>
      <head>
        <title>{pageTitle}</title>
      </head>
      <div className="container ">
        <h5 className="text-center mt-3">
          <b>Summary</b>
        </h5>
        {/* {loading && <Spinner />} */}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="table1 d-flex justify-content-center align-items-center">
              <table
                className="table table-bordered mt-3"
                style={{ width: "40%" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(countryCounts).map(([country, count]) => (
                    <tr key={country}>
                      <td>{country}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table2 d-flex justify-content-center align-items-center">
              <table
                className="table table-bordered mt-5"
                style={{ width: "40%" }}
              >
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
          </>
        )}
      </div>
    </main>
  );
}
