import { Link } from "react-router-dom"
function TeacherSidebar(){
    return (
        <aside className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">
            <Link to="/teacher-mycourses" className="list-group-item list-group-item-action">My Courses</Link>
            <Link to="/add-courses" className="list-group-item list-group-item-action">Add Courses</Link>
            <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
            <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/teacher-login" className="list-group-item list-group-item-action">Logout</Link>
            </div>
        </aside>
    )
}
export default TeacherSidebar