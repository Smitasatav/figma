import Form from "@/components/form";
import Navbar from "@/components/navbar";

export default function editUser(){
    return(
        <main>
            <Navbar title="Edit User" backBtn={true}/>
            {/* <Form submitBtnLable="Update"/> */}
        </main>
    )
}