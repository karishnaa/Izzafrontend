import './Newsletter.css';

function Newsletter() {
  return (
    <section className="signup-section">
      <div className="content-wrapper">
        <div className="text-side">
          <small className="badge">Exclusive offer</small>
          <h3>
            Sign up to our newsletter for <br />
            exclusive offers for 2025
          </h3>
          <button className="btn-signup">Sign Up</button>
        </div>
        <div className="image">
          <img src="src/assets/img/asignpostimage.jpg" alt="Newsletter" />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;