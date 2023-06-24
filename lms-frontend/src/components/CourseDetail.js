import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          Course Image
        </div>
        <div className="col-8">
          <h3>Course Title</h3>
          <p>Course Description</p>
          <p>Course By:  <Link to="/teacher-detail">Anshul Sharma</Link></p>
          <p>Duration: </p>
          <p>Total Enrolled: </p>
        </div>
      </div>
      {/*course vedios */}
      <div className="card my-5">
        <div className="card">
          <div className="card-header">
            Course Vedios
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Introduction <button type="button" class="btn btn-danger float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
             view
            </button></li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
     


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Course Vedios</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseDetail;