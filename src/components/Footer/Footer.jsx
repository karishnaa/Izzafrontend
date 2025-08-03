import './Footer.css';
// importing SVG icons for social media plarforms 
import facebookIcon from "/assets/svg/facebook.svg";
import instagramIcon from "/assets/svg/insta.svg";
import twitterIcon from "/assets/svg/twitter.svg";
import linkedinIcon from "/assets/svg/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left"> {/*keeps the branding on the left */}
          <div className="brand">izza</div>
          <p className="legal">
            ©IZZA is a company limited by guarantee registered in England and Wales
          </p>
        </div>

        <div className="footer-right">
          <div className="info-sections">
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <hr /> {/* divider to separate content that keeps layout clean and user friendly */}
              <p className="phone">01234 567890</p>
            </div>

            <div className="footer-socials">
              <h4>Follow Us</h4>
              <hr />
              {/* each icon is wrapped in an anchor for future linking*/}
              <div className="social-icons">
                <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
                <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
              </div>
            </div>
          </div>

          <div className="credits">
            <span>Made By <span className="agency">cloud<strong>fy.</strong></span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
