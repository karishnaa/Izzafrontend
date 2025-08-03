import React, { useState } from 'react';
import './Map.css';

function Map() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-text">
          <h2>Visit Us</h2>
          <p>
            We'd love to see you in person! Stop by the shop, grab a slice, and enjoy the vibe.
          </p>
          {/*button to trigger map modal */}
          <button className="map-btn" onClick={() => setShowMap(true)}>
            View Map
          </button>
        </div>

        <div className="map-image">
          <img src="/assets/asignpostimage.jpg" alt="Pizza oven" />
        </div>
      </div>
      {/* Only displays the map if true*/}
      {showMap && (
        <div className="modal-overlay" onClick={() => setShowMap(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowMap(false)}>×</button>
            {/* embedded google maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.9254597722654!2d-1.1339286902650432!3d52.63915745447631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7314784b68c14c0!2sUn.titled!5e0!3m2!1sen!2suk!4v1575994684235!5m2!1sen!2suk"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Map;
