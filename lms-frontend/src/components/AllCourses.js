import { Link } from "react-router-dom";
function AllCourses(){
  return (
    <div className="container-fluid">
    <div className="d-flex">
      <h2 className="float-start">Latest Courses</h2>
    </div>
    <div className="row mx-4 mt-2">
      <div className="card col-md-3 col-lg-3 mx-4 my-2">
        <img src="educate.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="float-end col-lg-9" to="/detail/2">see more</Link>
        </div>
      </div>
      <div className="card col-md-3 col-lg-3 mx-4 my-2">
        <img src="educate.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="float-end col-lg-9" to="/detail/2">see more</Link>
        </div>
      </div>
      <div className="card col-md-3 col-lg-3 mx-4 my-2">
        <img src="educate.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="float-end col-lg-9" to="/detail/2">see more</Link>
        </div>
      </div>
    </div>
  </div>
  )
}
export default AllCourses;