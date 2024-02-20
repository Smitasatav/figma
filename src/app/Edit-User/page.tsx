"use client";
import Form from "@/components/form";
import Navbar from "@/components/navbar";

export default function editUser(){

    const save=()=>{

    }
    return(
        <main>
            <Navbar title="Edit User" backBtn={true}/>
            <Form submitBtnLable="Update" onSave={save}/>
        </main>
    )
}