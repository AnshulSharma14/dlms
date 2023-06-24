import { Link } from "react-router-dom";
function TeacherDetail(){
   
    return(
        <div className="container mt-3">
          <div className="row">
            <div className="col-4">
                Course Image
            </div>
            <div className="col-8">
                <h3>Teacher Name</h3>
                <p>About</p>
                <p>Total Courses:  </p>
                <p>Skills :<Link to="/category-courses">Web Developement</Link></p>
                <p>Ratings</p>
            </div>
          </div>
          {/*course vedios */}
          <div className="card">
          <div class="card">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
          </div>
        </div>
    )
}
export default TeacherDetail;