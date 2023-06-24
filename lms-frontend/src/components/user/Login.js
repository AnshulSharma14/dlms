import { Link } from "react-router-dom";
function Login(){
 return (
    <div className="container mt-5 mb-5">
    <form method action="" className="form">
        <h1 className="title text-primary text-center">Login</h1>
        <div className="mb-2">
            <label for="Email" className="form-label">Email</label>
            <input type="text" className="form-control" id="Email" name="Email"/>
        </div>
        <div className="mb-2">
            <label for="Password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" name="password"/>
        </div>
        <div className="submitcontent">
            <input type="submit" className="btn submit btn-primary" value="Login" name="Login"/>
        </div>
        <div className="mb-2 mt-2">
            <h6 className="mt-1 mb-1">New user? <Link className="" to="/register">Register</Link> Here </h6>
        </div>
    </form>
</div>
 )
}
export default Login