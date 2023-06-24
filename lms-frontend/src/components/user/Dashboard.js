import { Link } from "react-router-dom";
import MyCourses from "./MyCourses";
import Sidebar from "./Sidebar";
function Dashboard(){
 return (
    <div className="container mt-5 mb-5">
       <div className="row">
        <div className="col-md-3">
        <Sidebar/>
        </div>
        <section className="col-md-9">
         dashboard
        </section>
       </div>
   </div>
 )
}
export default Dashboard