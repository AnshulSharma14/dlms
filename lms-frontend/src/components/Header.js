import { Link } from "react-router-dom"

function Header(){
    return (
<nav className="navbar navbar-expand-lg bg-transparent border-bottom py-4">
  <div className="container-fluid">
    <Link className="navbar-brand text-success ms-5 fs-3" to="/">DLMS EDU+</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        <Link className="nav-link text-dark" to="/all-courses">Courses</Link>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teacher
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-dark" to="/teacher-login">Login</Link></li>
            <li><Link className="dropdown-item text-dark" to="/teacher-register">Register</Link></li>
            <li><hr className="dropdown-divider text-white"/></li>
            <li><Link className="dropdown-item text-dark" to="#">Logout</Link></li>
            <li><Link className="dropdown-item text-dark" to="teacher-dashboard">DashBoard</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-0">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-dark" to="/login">Login</Link></li>
            <li><Link className="dropdown-item text-dark" to="/register">Register</Link></li>
            <li><hr className="dropdown-divider text-white"/></li>
            <li><Link className="dropdown-item text-dark" to="#">Logout</Link></li>
            <li><Link className="dropdown-item text-dark" to="dashboard">DashBoard</Link></li>
          </ul>
        </li>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Header