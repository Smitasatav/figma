"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import Spinner from "@/components/Spinner";

export default function getSummary() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<userDef[]>([]);
  const [countryCounts, setCountryCounts] = useState<{
    [country: string]: number;
  }>({});
  const [genderData, setGenderData] = useState<{ [gender: string]: number }>(
    {}
  );

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
    // Calculate genderdata
    let genderData: { [gender: string]: number } = {};
    users.forEach((user) => {
      genderData[user.gender] = (genderData[user.gender] || 0) + 1;
    });
    // console.log(genderData);
    setGenderData(genderData);

    // calculate country count
    const counts: { [country: string]: number } = {};
    users.forEach((user) => {
      counts[user.country] = (counts[user.country] || 0) + 1;
    });
    setCountryCounts(counts);
  }, [users]);

  console.log(countryCounts,genderData);

  return (
    <main>
      <div className="container">
        <h5 className="text-center mt-3">
          <b>SUMMARY</b>
        </h5>
        {/* <Link href="/" className=" d-md-flex justify-content-md-end">
          <button className=" btn btn-primary " type="submit">
            Back to Home Page
          </button>
        </Link> */}
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
            <div className="table1 d-flex justify-content-center align-items-center">
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
                  {Object.entries(genderData).map(([gender, count]) => (
                    <tr>
                      <td>{gender}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
