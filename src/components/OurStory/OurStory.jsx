import './OurStory.css';

function OurStory() {
  return (
    <section className="about-section">
      <div className="content-wrapper">
        <div className="text-content">
        <h2>OUR STORY</h2>
        {/* Mirroing section layout to aligin with the design and image directly */}
        <p>
          Phasellus ultrices, massa vel commodo maximus, ex metus accumsan ante, id maximus turpis augue id lacus. 
          Nullam porttitor mauris nec fermentum fermentum. Pellentesque habitant morbi
        </p>
          <div className="social-links">
            <a href="https://facebook.com/">Facebook</a>
            <a href="https://instagram.com/">Instagram</a>
          </div>
        </div>

        <div className="image-section">
          <img src="/assets/asignpostimage.jpg" alt="Pizza being made in our kitchen"/>
        </div>
      </div>
    </section>
  );
}

export default OurStory;