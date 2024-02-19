import Form from "@/components/form";
import Navbar from "@/components/navbar";

export default function AddTask(){
    return(
        <main>
            <Navbar title="Edit Task" backBtn={true}/>
            {/* <Form submitBtnLable="Update"/> */}
        </main>
    )
}