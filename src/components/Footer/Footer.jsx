import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <div className="brand">izza</div>
          <p>© 2025 IZZA Ltd. Registered in England & Wales</p>
        </div>

        <div className="contact-info">
          <h4>Get in Touch</h4>
          <div className="divider"></div>
          <p className="phone">01234 567890</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;