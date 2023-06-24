import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
function MyCourses(){
return(
    <div className="container mt-5 mb-5">
       <div className="row">
        <div className="col-md-3">
        <Sidebar/>
        </div>
        <section className="col-md-9">
        <div className="card">
            <div classname="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Php Developement</td>
                        <td><Link to="/">Suraj Kumar</Link></td>
                        <td><button className="btn bg-danger">watch</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
        </section>
       </div>
   </div>
)
}
export default MyCourses