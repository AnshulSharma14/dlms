import { Link } from "react-router-dom"
function Sidebar(){
    return (
        <aside className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">
            <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link>
            <Link to="/favourite-courses" className="list-group-item list-group-item-action">Favourite Courses</Link>
            <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recommended Courses</Link>
            <Link to="/profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
            <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/login" className="list-group-item list-group-item-action">Logout</Link>
            </div>
        </aside>
    )
}
export default Sidebar