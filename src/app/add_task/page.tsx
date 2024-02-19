"use client";
import React, { useState } from "react";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
import axios from "@/components/api";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import { useRouter } from 'next/navigation'

export default function AddTask(){
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const save = async(user: taskDef) => {
        setLoading(true);
        const res = await axios.post("/users",[user]);
        console.log(user)
        setLoading(false);
        router.push('/')
      };
    return(
        <main>
            <Navbar title="Add Task" backBtn={true}/>
            <Form submitBtnLable="ADD" onSave={save}/>
        </main>
    )
}