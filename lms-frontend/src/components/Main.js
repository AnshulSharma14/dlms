import CourseDetail from "./CourseDetail";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import {Routes ,Route} from 'react-router-dom'
//user
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import FavouriteCourses from "./user/FavouriteCourses";
import RecommendedCourses from "./user/RecommendedCourses";
import ProfileSetting from "./user/ProfileSetting";
import Sidebar from "./user/Sidebar";
import MyCourses from "./user/MyCourses";
import ChangePassword from "./user/ChangePassword";
//teacher
import TeacherChangePassword from "./teacher/TeacherChangePassword";
import TeacherLogin from "./teacher/TeacherLogin";
import TeacherRegister from "./teacher/TeacherRegister";
import TeacherDashboard from "./teacher/TeacherDashboard";
import AddCourses from "./teacher/AddCourses";
import TeacherProfileSetting from "./teacher/TeacherProfileSetting";
import TeacherSidebar from "./teacher/TeacherSidebar";
import TeacherMyCourses from "./teacher/TeacherMyCourses"
import TeacherDetail from "./TeacherDetail";
//list
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularTeacher from "./PopularTeacher";
import CategoryCourses from "./CategoryCourses";
function Main() {
    return (
      <div className="main">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/detail/:course_id' element={<CourseDetail />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/favourite-courses" element={<FavouriteCourses/>}/>
          <Route path="/recommended-courses" element={<RecommendedCourses/>}/>
          <Route path="/profile-setting" element={<ProfileSetting/>}></Route>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/my-courses" element={<MyCourses/>}/>
          <Route path="/change-password" element={<ChangePassword/>}/>
          
          <Route path ="/teacher-change-password" element={<TeacherChangePassword/>}/>
          <Route path="/teacher-login" element={<TeacherLogin/>}/>
          <Route path="/teacher-register" element={<TeacherRegister/>}/>
          <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
          <Route path="/add-courses" element={<AddCourses/>}/>
          <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>}/>
          <Route path="/teacher-sidebar" element={<TeacherSidebar/>}/> 
          <Route path="/teacher-mycourses" element={<TeacherMyCourses/>}/>
          <Route path="/teacher-detail" element={<TeacherDetail/>}/>
          
          <Route path="/all-courses" element={<AllCourses/>}/>
          <Route path="/popular-courses" element={<PopularCourses/>}/>
          <Route path="/popular-teacher" element={<PopularTeacher/>}/>
          <Route path="/category-courses" element={<CategoryCourses/>}/>
          </Routes>
        <Footer/>
      </div>
    );
  }
  
  export default Main;