import './Newsletter.css';

function Newsletter() {
  return (
    <section className="signup-section">
      <div className="content-wrapper">
        {/* text content and signup CTA */}
        <div className="text-side">
          {/* Badge to highlight offer */}
          <small className="badge">Exclusive offer</small>
          <h3>
            Sign up to our newsletter for <br />
            exclusive offers for 2025
          </h3>
          {/* signup button (no form just a CTA for now)*/}
          <button className="btn-signup">Sign Up</button>
        </div>
        <div className="image">
          <img src="/assets/asignpostimage.jpg" alt="Newsletter" />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;