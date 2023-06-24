import { Link } from "react-router-dom";
function PopularCourses(){
  return (
    <div className="container">
    <div className="text-center mt-2 mb-2">
      <h2 className="">Popular Courses</h2>
    </div>
    <div className="row mt-2">
      <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/detail/2"><img src="educate.jpeg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="" to="/detail/2">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
      <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/detail/2"><img src="educate.jpeg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="" to="/detail/2">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
      <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/detail/2"><img src="educate.jpeg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="" to="/detail/2">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
      <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/detail/2"><img src="educate.jpeg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Course</h5>
          <Link className="" to="/detail/2">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default PopularCourses;