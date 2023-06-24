import { Link } from "react-router-dom"
import TeacherSidebar from "./TeacherSidebar"
function ProfileSetting(){
 return (
    <div className="container mt-5 mb-5">
       <div className="row">
        <div className="col-md-3">
        <TeacherSidebar/>
        </div>
        <section className="col-md-9">
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
       </div>
   </div>
 )
}
export default ProfileSetting