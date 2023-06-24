import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home mt-3">
    <div className="">
      <div className="row">
        <div className="col-lg-8 col-md-8">
    <video loop autoPlay className="w-100 vedio px-5">
    <source src="v3.mp4" type="video/mp4" repeat="true" autoPlay={true} className="vedio"/>
      </video>
      </div>
      <div className="col-lg-4 col-md-4 align-item-center justify-content-center mt-5 p-5">
        <h1 className="text-uppercase hero-line ">Transform</h1>
          <h1 className="text-uppercase">Empower and Discover</h1>
          <h1 className="text-uppercase">the future with DLMS EDU+</h1>
          <p className="hero-subheading mt-3">Forget the old rules. You can have the best people.
          Right now. Right here.</p>
        <button className="green-btn btn mt-3">Get Started</button>
      </div>
      </div>
      <div className="row">
        <div class="col-lg-8 col-md-8">
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="educate.jpeg" className="" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="educate.jpeg" className="" height={800} alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="lms2.jpg" className="" height={800} alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      </div>
      <div>
        <div className="col-lg-4 col-md-4">

        </div>
      </div>
      </div>

    </div>
      <div className="container-fluid">
        <div className="">
          <h2 className="float-start">Latest Courses</h2>
          <Link className="float-end" to="/all-courses">see more</Link>
        </div>
        <div className="row mx-4 mt-2">
          <div className="card col-md-3 col-lg-3 mx-4 my-2">
            <img src="logo512.pbng" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Course</h5>
              <Link className="float-end col-lg-9" to="/detail/2">see more</Link>
            </div>
          </div>
          <div className="card col-md-4 col-lg-4 mx-4 my-2">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Course  <Link className="float-end col-lg-9" to="/detail/2">see more</Link></h5>
            </div>
          </div>
          <div className="card col-md-3 col-lg-3 mx-4 my-2">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Course</h5>
              <Link className="float-end col-lg-9" to="/detail/2">see more</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="d-flex">
          <h2 className="float-start">Popular Courses</h2>
          <Link className="float-end col-lg-9" to="/popular-courses">see more</Link>
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
        </div>
      </div>

      <div className="container-fluid">
      <div className="d-flex">
          <h2 className="float-start">Popular Teacher</h2>
          <Link className="float-end col-lg-9" to="/popular-teacher">see more</Link>
        </div>
        <div className="row">
        <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/teacher-detail"><img src="lms3.jpg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Teacher Name</h5>
          <Link className="" to="/teacher-detail">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
        <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/teacher-detail"><img src="lms3.jpg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Teacher Name</h5>
          <Link className="" to="/teacher-detail">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
      <div className="card col-md-3 col-lg-3 mx-5 my-2">
        <div className="card-title">
        <Link className="" to="/teacher-detail"><img src="lms3.jpg" className="card-img-top" alt="..." /></Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Teacher Name</h5>
          <Link className="" to="/teacher-detail">see more</Link>
        </div>
        <div className="card-footer">
           <p className="">Rating : 4.5/5</p>
           <p className="">Views : 12323</p>
        </div>
      </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="d-flex">
          <h2 className="float-start">Featured Teachers</h2>
          <a className="float-end col-lg-9">see more</a>
        </div>
        <div className="row mx-4 mt-2">
          <div className="card col-md-3 col-lg-3 mx-4 my-2">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View More</h5>
              <a href="#" className="btn btn-primary">Details</a>
            </div>
          </div>
          <div className="card col-md-3 col-lg-3 mx-4 my-2">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View More</h5>
              <a href="#" className="btn btn-primary">Details</a>
            </div>
          </div>
          <div className="card col-md-3 col-lg-3 mx-4 my-2">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View More</h5>
              <a href="#" className="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;