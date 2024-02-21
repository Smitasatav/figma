import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar";

export default function AddTask() {
  return (
    <main>
      <Navbar title="Edit Task" backBtn={true} />
    </main>
  );
}
