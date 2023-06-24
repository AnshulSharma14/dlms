import { Link } from "react-router-dom";
function Register(){
 return (
    <div className="container mt-5 mb-5">
    <form method action="" className="form">
        <h1 className="title text-primary mb-3">Registration form</h1>
        <div className="mb-2">
            <label for="FullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="FirstName" name="firstname"/>
        </div>
       
        <div className="mb-2">
            <label for="Email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="Email" name="email"/>
        </div>
        <div className="mb-2">
            <label for="userName" className="form-label">User Name</label>
            <input type="text" className="form-control" id="UserName" name="lastname"/>
        </div>
        <div className="mb-2">
            <label for="Phonenumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="Phonenumber" name="phonenumber"/>
        </div>
        <div className="mb-2">
            <label for="Password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" name="password"/>
        </div>
        <div className="mb-2">
            <label for="ConfirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="ConfirmPassword"/>
        </div>
        
        <div className="submitcontent">
            <input type="submit" className="btn btncs btn-primary" value="submit"/>
        </div>
        <div className="mb-2 mt-2">
            <h6 className="mt-1 mb-1">Already Register login Here <Link className="" to="/login">Login</Link></h6>
        </div>
    </form>
</div>
    )
}
export default Register