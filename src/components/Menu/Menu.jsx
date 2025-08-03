import './Menu.css';

function Menu() {
  return (
    <section className="menu">
      <div className="menu-container">
        <h2 className="menu-heading">Menu</h2>
        
        <div className="menu-tabs">
          <button className="menu-tab active">Pizza</button>
          <button className="menu-tab">Calzone</button>
          <button className="menu-tab">Dessert</button>
          <button className="menu-tab">Drinks</button>
        </div>
        
        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-img">
              <img src="/assets/bpizzaimage.jpg" alt="Pizza" />
            </div>
            <div className="menu-content">
              <h3>Pizza</h3>
              <p>Tomato sauce, mozzarella, hot dog, caramelised onions, red onions and french's mustard drizzle.</p>
            </div>
          </div>
          
          <div className="menu-card">
            <div className="menu-img">
              <img src="/assets/bpizzaimage.jpg" alt="Drinks" />
            </div>
            <div className="menu-content">
              <h3>Drinks</h3>
              <p>Fresh sodas, craft beers, wine selection, and specialty cocktails. Ice cold and ready to complement your meal.</p>
            </div>
          </div>
          
          <div className="menu-card">
            <div className="menu-img">
              <img src="/assets/bpizzaimage.jpg" alt="Calzone" />
            </div>
            <div className="menu-content">
              <h3>Calzone</h3>
              <p>Folded pizza dough stuffed with ricotta, mozzarella, marinara sauce, and your choice of toppings. Baked golden brown.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
