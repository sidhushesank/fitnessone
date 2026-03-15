import React from 'react';
import './App.css';
import { 
  MapPin, Phone, Clock, Star, 
  Dumbbell, Activity, Users, Flame, 
  Trophy, Shield, Facebook, Instagram, Twitter
} from 'lucide-react';

// Using the generated assets
import heroImg from './assets/fitness_one_hero_1773571532527.png';
import mmaImg from './assets/fitness_one_mma_1773571560287.png';
import poolImg from './assets/fitness_one_pool_1773571595398.png';
import cardioImg from './assets/fitness_one_cardio_1773571717935.png';
import sportsImg from './assets/fitness_one_sports_1773572635638.png';
import communityImg from './assets/fitness_one_community_1773572618579.png';
import customLogo from './assets/logo.png';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src={customLogo} alt="Fitness One Logo" className="logo-img" />
            <div className="logo-text">
              <span className="text-blue">FITNESS</span> ONE
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Facility</a></li>
            <li><a href="#offerings">Programs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(5px)', opacity: 0, animation: 'slideUpFade 0.8s ease forwards' }}>
            <div style={{ display: 'flex', color: '#FFD700', marginRight: '0.5rem' }}>
              <Star fill="#FFD700" size={16} />
              <Star fill="#FFD700" size={16} />
              <Star fill="#FFD700" size={16} />
              <Star fill="#FFD700" size={16} />
              <Star fill="#FFD700" size={16} style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>4.2 Rating • 500+ Google Reviews</span>
          </div>

          <div className="hero-subtitle">
            <Activity size={24} /> 
            33,000 SQ FT PREMIUM FACILITY
          </div>
          <h1 className="hero-title">
            BUILD YOUR <span>LEGACY</span><br/>
            UNDER ONE ROOF
          </h1>
          <p className="hero-desc">
            Experience Hyderabad's largest multi-activity center. A massive scale environment engineered for general fitness, athletic training, elite combat sports, and family wellness.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start Your Journey</a>
            <a href="#offerings" className="btn btn-outline">Explore Programs</a>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <div className="trust-bar">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>33k</h3>
            <p>Sq Ft Facility</p>
          </div>
          <div className="stat-item">
            <div style={{ display: 'flex', justifyContent: 'center', color: '#FFD700', marginBottom: '1rem' }}>
              <Star fill="#FFD700" size={32} />
              <Star fill="#FFD700" size={32} />
              <Star fill="#FFD700" size={32} />
              <Star fill="#FFD700" size={32} />
              <Star fill="#FFD700" size={32} style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
            </div>
            <p>4.2 Rating (500+ Reviews)</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Training Programs</p>
          </div>
          <div className="stat-item">
            <h3>7</h3>
            <p>Days a week</p>
          </div>
        </div>
      </div>

      {/* Facility Promo Section */}
      <section id="about" className="section">
        <div className="container facility-promo">
          <div className="facility-text">
            <h2>MORE THAN JUST A <span className="text-blue">GYM</span></h2>
            <div className="facility-badge">
              <div className="facility-badge-icon">
                <Trophy size={28} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>State-of-the-Art Scale</h4>
                <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem' }}>Unmatched infrastructure in LB Nagar</p>
              </div>
            </div>
            <p>
              Fitness One is designed for individuals, athletes, and families who demand more from their training environment. Our 33,000 sq ft performance center combines intense aesthetic atmosphere with elite grade equipment.
            </p>
            <p>
              From professional combat arenas to dedicated cardio zones and recovery pools, we provide the absolute best environment to push your limits.
            </p>
            <p style={{ marginTop: '2rem' }}>
               <a href="#contact" className="btn btn-primary">Take a Tour</a>
            </p>
          </div>
          <div className="facility-images">
             <img src={heroImg} alt="Main Gym Floor" className="img-main" />
             <img src={cardioImg} alt="Cardio Equipment" className="img-secondary" />
          </div>
        </div>
      </section>

      {/* Offerings Grid Workspace */}
      <section id="offerings" className="section offerings-section">
        <div className="container">
          <h2 className="section-title">CHOOSE YOUR <span className="text-blue">DISCIPLINE</span></h2>
          <div className="offerings-grid">
            
            {/* Fitness & Training */}
            <div className="offering-card">
              <img src={cardioImg} alt="Fitness & Training" className="offering-img" />
              <div className="offering-overlay">
                <h3 className="offering-title">Fitness & Training</h3>
                <ul className="offering-list">
                  <li><Dumbbell size={16} color="var(--primary-blue)" /> Full gym & strength facility</li>
                  <li><Activity size={16} color="var(--primary-blue)" /> Modern workout equipment</li>
                  <li><Users size={16} color="var(--primary-blue)" /> Group fitness (Zumba)</li>
                </ul>
              </div>
            </div>

            {/* Combat Sports */}
            <div className="offering-card">
              <img src={mmaImg} alt="Combat Sports" className="offering-img" />
              <div className="offering-overlay">
                <h3 className="offering-title">Combat Sports</h3>
                <ul className="offering-list">
                  <li><Shield size={16} color="var(--primary-blue)" /> MMA training</li>
                  <li><Flame size={16} color="var(--primary-blue)" /> Muay Thai training</li>
                </ul>
              </div>
            </div>

            {/* Sports & Activities */}
            <div className="offering-card">
              <img src={sportsImg} alt="Sports & Activities" className="offering-img" />
              <div className="offering-overlay">
                <h3 className="offering-title">Sports & Activities</h3>
                <ul className="offering-list">
                  <li><Activity size={16} color="var(--primary-blue)" /> Indoor box cricket</li>
                  <li><Users size={16} color="var(--primary-blue)" /> Cricket academy training</li>
                </ul>
              </div>
            </div>

            {/* Wellness & Amenities */}
            <div className="offering-card">
              <img src={poolImg} alt="Wellness & Amenities" className="offering-img" />
              <div className="offering-overlay">
                <h3 className="offering-title">Wellness & Amenities</h3>
                <ul className="offering-list">
                  <li><Activity size={16} color="var(--primary-blue)" /> Indoor swimming pool</li>
                  <li><Flame size={16} color="var(--primary-blue)" /> Sauna facilities</li>
                </ul>
              </div>
            </div>
            
            {/* Community Programs */}
            <div className="offering-card">
              <img src={communityImg} alt="Community Programs" className="offering-img" />
              <div className="offering-overlay">
                <h3 className="offering-title">Community Programs</h3>
                <ul className="offering-list">
                  <li><Users size={16} color="var(--primary-blue)" /> Kids summer camps</li>
                  <li><Activity size={16} color="var(--primary-blue)" /> Multi-age fitness groups</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location / Action */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            FIND <span className="text-blue">US</span>
          </h2>
          <div className="contact-grid">
            <div className="contact-info">
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div className="contact-detail">
                  <h4>Address</h4>
                  <p>3/8/65, NH65, beside LPT Mall and<br/>Shah Ghouse Restaurant<br/>Saraswati Nagar, Chandrapuri Colony<br/>LB Nagar, Hyderabad – 500074</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <p>097007 77888</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Clock size={24} /></div>
                <div className="contact-detail">
                  <h4>Hours</h4>
                  <p>Open Daily<br/>5:00 AM - 10:30 PM</p>
                </div>
              </div>
              
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => window.open('https://maps.google.com/?q=Fitness+One+LB+Nagar+Hyderabad', '_blank')}>
                Get Directions
              </button>

            </div>
            
            <div className="contact-form">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="+91 00000 00000" required />
                </div>
                <div className="form-group">
                  <label>Interested Program</label>
                  <select className="form-control" style={{ WebkitAppearance: 'none', appearance: 'none' }}>
                    <option value="" disabled selected>Select a program...</option>
                    <option value="fitness">Fitness & Strength</option>
                    <option value="combat">Combat Sports</option>
                    <option value="wellness">Wellness & Pool</option>
                    <option value="sports">Box Cricket / Academy</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" placeholder="Tell us about your fitness goals..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Submit Inquiry</button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <div className="full-width-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.144141639!2d78.53755!3d17.348733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba33c561b6bbd%3A0xe53a3ffcdcd4ee!2sFitness%20One!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Fitness One Location">
        </iframe>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-top">
            {/* Column 1: Brand & Info */}
            <div>
               <div className="logo" style={{ marginBottom: '1.5rem' }}>
                  <img src={customLogo} alt="Fitness One Logo" className="logo-img" />
                  <div className="logo-text">
                    <span className="text-blue">FITNESS</span> ONE
                  </div>
                </div>
                <p style={{ color: '#888', maxWidth: '300px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Hyderabad's premier 33,000 sq ft destination for strength, combat sports, and holistic wellness. Start building your legacy today.
                </p>
                <div className="social-links">
                  <a href="#" className="social-icon"><Facebook size={20} /></a>
                  <a href="#" className="social-icon"><Instagram size={20} /></a>
                  <a href="#" className="social-icon"><Twitter size={20} /></a>
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Facility</a></li>
                <li><a href="#offerings">Our Programs</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">Join the Team</a></li>
              </ul>
            </div>

            {/* Column 3: Programs */}
            <div>
              <h4 className="footer-heading">Programs</h4>
              <ul className="footer-links">
                <li><a href="#">General Fitness</a></li>
                <li><a href="#">MMA & Muay Thai</a></li>
                <li><a href="#">Indoor Swimming</a></li>
                <li><a href="#">Box Cricket Arena</a></li>
                <li><a href="#">Kids Summer Camps</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="footer-heading">Stay Updated</h4>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Subscribe to our newsletter for exclusive offers, training tips, and facility updates.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" className="newsletter-input" required />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>

          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Fitness One LB Nagar. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Membership Agreement</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
