import { Link } from "react-router-dom"
function Footer(){
return (
    <div class="footer-dark">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="#">Course</Link></li>
                        <li><Link to="#">Featured Teachers</Link></li>
                        <li><Link to="#">Category</Link></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><Link to="#">Company</Link></li>
                        <li><Link to="#">Team</Link></li>
                        <li><Link to="#">Careers</Link></li>
                    </ul>
                </div>
                <div class="col-md-6 item text">
                    <h3>EDU+</h3>
                    <p>As a mission-driven organization, 
                        we're relentlessly pursuing our vision of a world where every learner can access education to unlock their potential, without the barriers of cost or location.</p>
                </div>
                <div class="col item social"><Link to="#"><i class="icon ion-social-facebook"></i></Link><Link href="#"><i class="icon ion-social-twitter"></i></Link><Link href="#"><i class="icon ion-social-snapchat"></i></Link><Link to="#"><i class="icon ion-social-instagram"></i></Link></div>
            </div>
            <p class="copyright">EDU+ © 2023</p>
        </div>
    </footer>
</div>
)
}
export default Footer