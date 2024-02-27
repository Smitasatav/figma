"use client";
import React, { useState } from "react";
import Form from "@/components/form";
import axios from "@/components/api";
import { userDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import { useRouter } from 'next/navigation'

export default function AddUser(){
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const save = async(user: userDef) => {
        setLoading(true);
        const res = await axios.post("/users",[user]);
        console.log(user)
        setLoading(false);
        router.push('/')
      };

    return(
        <main>
            <Form submitBtnLable="ADD" title="ADD USER" onSave={save} loading={loading}/>
        </main>
    )
}