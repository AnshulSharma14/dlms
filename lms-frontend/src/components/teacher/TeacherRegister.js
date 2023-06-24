import { Link } from "react-router-dom";
import { useEffect } from "react";
function TeacherRegister(){
    useEffect(()=>{
        document.title="Teacher Register"
    })
 return (
    <div className="container mt-5 mb-5">
        <h2 className="text-center mb-5 mt-5 fs-1"></h2>
    <form method action="" className="form">
        <h1 className="title text-primary text-center mb-3">Registration form</h1>
        <div className="mb-2">
            <label htmlFor="FullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="FirstName" name="firstname"/>
        </div>
        <div className="mb-2">
            <label htmlFor="Email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="Email" name="email"/>
        </div>
        <div className="mb-2">
            <label htmlFor="qualification" className="form-label">Qualifications</label>
            <input type="text" className="form-control" id="qualification"/>
        </div>
        <div className="mb-2">
            <label htmlFor="Phonenumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="Phonenumber" name="phonenumber"/>
        </div>
        <div className="mb-2">
            <label htmlFor="skills" className="form-label">Skills</label>
            <input type="text-area" className="form-control" id="Skills" name="skills"/>
        </div>
        <div className="mb-2">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" name="password"/>
        </div>
        <div className="submitcontent">
            <input type="submit" className="btn btncs green-btn" value="submit"/>
        </div>
        <div className="mb-2 mt-2">
            <h6 className="mt-1 mb-1">Already Register login Here <Link className="" to="/teacher-login">Login</Link></h6>
        </div>
    </form>
</div>
    )
}
export default TeacherRegister