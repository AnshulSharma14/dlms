import { Link } from "react-router-dom"
import TeacherSidebar from "./TeacherSidebar"
function AddCourses(){
    return(
        <div className="container mt-5 mb-5">
           <div className="row">
            <div className="col-md-3">
            <TeacherSidebar/>
            </div>
            <section className="col-md-9">
            <div className="card">
                <div classname="card-body">
                   form
                </div>
             </div>
            </section>
           </div>
       </div>
    )
    }
    export default AddCourses