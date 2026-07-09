import { useEffect, useState } from 'react';

const featuredDishes = [
  {
    title: 'Saffron Lobster Symphony',
    price: '$72',
    subtitle: "Chef's Signature",
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Noir Gold Soufflé',
    price: '$24',
    subtitle: 'Dessert',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Black Truffle Tagliatelle',
    price: '$48',
    subtitle: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80'
  }
];

const highlights = [
  {
    icon: 'restaurant',
    title: 'Artisanal Sourcing',
    text: 'We partner with local farms and deep-sea fishers to source ingredients at peak flavor.'
  },
  {
    icon: 'workspace_premium',
    title: 'Award-Winning Culinary Team',
    text: 'Our chefs blend French tradition with modern precision for a truly elevated experience.'
  },
  {
    icon: 'wine_bar',
    title: 'Curated Wine Cellar',
    text: 'A collection of rare vintages paired expertly by our Master Sommelier.'
  }
];

const offers = [
  {
    title: 'Twilight Tasting Flight',
    text: 'A curated 5-course journey for two, available only between 5PM and 7PM.',
    price: '$120',
    badge: 'Offer'
  },
  {
    title: "Sommelier's Selection",
    text: 'Enjoy 30% off our collection of vintage Champagnes every Tuesday.',
    price: '30% Off',
    badge: 'Offer'
  }
];

function App() {
  const [status, setStatus] = useState('Preparing your evening...');
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '2' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('The concierge is online and ready.'));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    setSubmitted(true);
    setStatus(data.message);
  };

  return (
    <div className="app-shell">
      <nav className="topbar">
        <div className="brand">LUMIÈRE</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="button primary" href="#contact">Book a Table</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Michelin Star Excellence</p>
            <h1>Experience Delicious Food</h1>
            <p>
              Discover a symphony of flavors where traditional French techniques meet modern culinary innovation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#menu">View Menu</a>
              <a className="button secondary" href="#contact">Reserve Now</a>
            </div>
            <div className="status-pill">{status}</div>
          </div>
        </section>

        <section className="section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Featured Delicacies</p>
            <h2>Signature plates, artfully composed.</h2>
          </div>
          <div className="card-grid">
            {featuredDishes.map((dish) => (
              <article className="feature-card" key={dish.title}>
                <img src={dish.image} alt={dish.title} />
                <div className="feature-card__body">
                  <p className="eyebrow small">{dish.subtitle}</p>
                  <h3>{dish.title}</h3>
                  <div className="feature-card__footer">
                    <span>{dish.price}</span>
                    <button type="button">Discover</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="about">
          <div className="split-image" />
          <div>
            <p className="eyebrow">Why Choose Us</p>
            <h2>Artistry in every detail.</h2>
            <div className="highlights">
              {highlights.map((item) => (
                <div className="highlight-item" key={item.title}>
                  <span className="material-symbols">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="offers">
          <div className="section-heading">
            <p className="eyebrow">Limited Time</p>
            <h2>Today's special offers.</h2>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article className="offer-card" key={offer.title}>
                <div>
                  <p className="eyebrow small">{offer.badge}</p>
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                </div>
                <span className="offer-price">{offer.price}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section reservation-section" id="contact">
          <div className="reservation-card">
            <div>
              <p className="eyebrow">Reservation Concierge</p>
              <h2>Reserve your evening.</h2>
              <p>Reach us for private dining, celebrations, and chef's table requests.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
              <input name="date" type="date" value={form.date} onChange={handleChange} required />
              <select name="guests" value={form.guests} onChange={handleChange}>
                <option value="2">2 Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8">8 Guests</option>
              </select>
              <button className="button primary" type="submit">Request Reservation</button>
              {submitted && <p className="success-message">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Lumière Fine Dining. All rights reserved.</p>
        <div>
          <a href="#">Instagram</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
