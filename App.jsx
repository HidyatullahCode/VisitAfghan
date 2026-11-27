
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import {
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Compass,
  Clock,
  Instagram,
  Facebook,
  Mail,
  Send
} from "lucide-react";

// DESTINATION DATA
const destinations = [
  {
    name: "Band-e Amir",
    location: "Bamyan Province",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    
    description: "Discover the breathtaking blue lakes and beautiful mountains."
  },
  {
  //   name: "Bamyan Valley",
  //   location: "Bamyan Province",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bamyan_Valley_in_2012.jpg",
  //   description: "Explore a historic valley surrounded by magnificent mountains."
  // },
  




   name: "Bamyan Valley",
    location: "Bamyan Province",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Bamiyan_Valley.jpg",
    description: "Explore a historic valley surrounded by magnificent mountains."
    
  },
  {
    name: "Wakhan Valley",
    location: "Badakhshan Province",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Experience spectacular mountain scenery and natural beauty."
  },

{
  name: "Khost Nature",
  location: "Khost Province",
  image: "https://pbs.twimg.com/media/E72iB9_XMBE54vs.jpg",
  description: "Discover the peaceful villages, beautiful green fields, traditional homes, and natural mountain scenery of Khost Province."
},



];

const navItems = [
  ["Home", "/"],
  ["Destinations", "/destinations"],
  ["Tours", "/tours"],
  ["Culture", "/culture"],
  ["About", "/about"],
  ["Blog", "/blog"]
];

// NAVBAR
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          Visit<span>Afghan</span><i>.</i>
        </Link>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav-button">
          Let's Talk <ArrowUpRight size={17} />
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

// DESTINATION CARD
function DestinationCard({ item, number }) {
  return (
    <Link to="/destinations" className="destination-card">

      <img src={item.image} alt={item.name} />

      <span className="destination-number">{number}</span>

      <div className="destination-info">
        <span><MapPin size={14} /> {item.location}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="card-arrow">
          Explore <ArrowUpRight size={18} />
        </div>
      </div>

    </Link>
  );
}

// HOME PAGE
function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-label">
            <span></span> DISCOVER THE HEART OF ASIA
          </div>

          <h1>
            A Land of <br />
            <span>Beauty & Wonder.</span>
          </h1>

          <p>
            From breathtaking mountains to ancient cities,
            discover the extraordinary beauty and rich heritage
            of Afghanistan.
          </p>

          <div className="hero-actions">
            <Link to="/destinations" className="primary-button">
              Explore Destinations <ArrowUpRight size={18} />
            </Link>

            <Link to="/about" className="text-button">
              Discover Our Story
            </Link>
          </div>
        </div>

        <div className="hero-bottom">
          <span>34.5° N — AFGHANISTAN</span>
          <span>AN EXTRAORDINARY JOURNEY AWAITS</span>
        </div>

        <div className="hero-scroll">SCROLL TO EXPLORE ↓</div>

      </section>

      <section className="intro section-padding">
        <div className="intro-label">01 / WELCOME TO AFGHANISTAN</div>

        <div className="intro-content">
          <h2>
            More than a destination.
            <span> A world waiting to be discovered.</span>
          </h2>

          <div>
            <p>
              Afghanistan is a land of extraordinary landscapes,
              fascinating history and welcoming cultural traditions.
              Every region tells a different story.
            </p>
            <Link to="/about" className="under-link">
              Learn More About Us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="stats-grid">
          <div><strong>34</strong><span>Provinces</span></div>
          <div><strong>∞</strong><span>Stories to Discover</span></div>
          <div><strong>01</strong><span>Beautiful Country</span></div>
        </div>
      </section>

      <section className="destinations-section section-padding">
        <div className="section-heading">
          <div>
            <div className="intro-label">02 / EXPLORE THE COUNTRY</div>
            <h2>Places that take <span>your breath away.</span></h2>
          </div>

          <Link to="/destinations" className="under-link">
            View All Places <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="destination-grid">
          {destinations.map((item, index) => (
            <DestinationCard
              key={item.name}
              item={item}
              number={`0${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-image"></div>

        <div className="experience-content">
          <div className="intro-label">03 / THE EXPERIENCE</div>
          <h2>Every journey has a story.</h2>
          <p>
            Explore ancient heritage, discover local traditions,
            experience incredible landscapes and learn about
            the people who make Afghanistan unique.
          </p>
          <Link to="/culture" className="primary-button">
            Explore Our Culture <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="cta-section section-padding">
        <div className="intro-label">YOUR JOURNEY STARTS HERE</div>
        <h2>Ready to discover <span>Afghanistan?</span></h2>
        <p>Let's explore the extraordinary together.</p>
        <Link to="/contact" className="primary-button">
          Contact Our Team <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

// DESTINATIONS PAGE
function Destinations() {
  return (
    <PageLayout
      label="EXPLORE AFGHANISTAN"
      title={<>Discover Amazing <span>Destinations.</span></>}
      description="Explore the extraordinary landscapes, historic places and beautiful regions of Afghanistan."
    >
      <div className="destination-grid">
        {destinations.map((item, index) => (
          <DestinationCard
            key={item.name}
            item={item}
            number={`0${index + 1}`}
          />
        ))}
      </div>
    </PageLayout>
  );
}

// TOURS PAGE
function Tours() {
  return (
    <PageLayout
      label="TRAVEL EXPERIENCES"
      title={<>Find Your Next <span>Adventure.</span></>}
      description="Discover travel experiences inspired by the landscapes and culture of Afghanistan."
    >
      <div className="feature-grid">
        <Feature
          icon={<Compass />}
          title="Nature & Adventure"
          text="Explore mountain landscapes, lakes and beautiful valleys."
        />
        <Feature
          icon={<Clock />}
          title="Cultural Discovery"
          text="Learn about local traditions, heritage and history."
        />
        <Feature
          icon={<MapPin />}
          title="Historic Journeys"
          text="Discover remarkable historic places and architecture."
        />
      </div>
      <p className="notice">
        Travel information and tour arrangements should be verified
        with qualified local providers before making a booking.
      </p>
      <Link to="/contact" className="primary-button">
        Make an Inquiry <ArrowUpRight size={18} />
      </Link>
    </PageLayout>
  );
}

// CULTURE PAGE
function Culture() {
  return (
    <PageLayout
      label="OUR HERITAGE"
      title={<>A Culture Full of <span>Stories.</span></>}
      description="Discover the traditions, art, architecture, food and heritage that make Afghanistan special."
    >
      <div className="feature-grid">
        <Feature title="Traditional Food" text="Explore the flavors and traditional dishes of Afghanistan." />
        <Feature title="Art & Craft" text="Discover traditional crafts, carpets and artistic heritage." />
        <Feature title="History & Heritage" text="Learn about the country's fascinating historical background." />
      </div>
    </PageLayout>
  );
}

// ABOUT PAGE
function About() {
  return (
    <PageLayout
      label="OUR STORY"
      title={<>Sharing the Beauty of <span>Afghanistan.</span></>}
      description="VisitAfghan is a tourism website concept created to introduce Afghanistan's destinations, heritage and natural beauty to the world."
    >
      <div className="about-box">
        <h2>Who Is the Developer?</h2>

        <p>
          VisitAfghan was created by Hidayatullah Zadran,
          a Full-Stack Web Developer and Computer Science student.
          He builds modern, responsive and user-friendly websites.
        </p>

        <p>
          <strong>Skills:</strong> HTML, CSS, JavaScript, React,
          Python and SQL.
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/HidyatullahCode"
            target="_blank"
            rel="noreferrer"
          >
            github.com/HidyatullahCode
          </a>
        </p>

        <p>
          <strong>Portfolio:</strong>{" "}
          <a
            href="https://hidayatullah-portfolio-blush.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            View My Portfolio
          </a>
        </p>
      </div>
    </PageLayout>
  );
}

// BLOG PAGE
function Blog() {
  return (
    <PageLayout
      label="TRAVEL JOURNAL"
      title={<>Stories & Travel <span>Inspiration.</span></>}
      description="Read about Afghanistan's landscapes, culture, history and extraordinary places."
    >
      <div className="feature-grid">
        <Feature title="The Beauty of Band-e Amir" text="Discover the famous blue lakes of Bamyan." />
        <Feature title="A Journey Through Bamyan" text="Learn about the landscapes and heritage of Bamyan." />
        <Feature title="Exploring Afghan Culture" text="Discover traditional food, arts and local customs." />
      </div>
    </PageLayout>
  );
}



// CONTACT PAGE
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "0d761ada-5d5f-4e63-b3c2-620e9bf29682"
    //  "757d7ba2-9125-446d-843e-60c32a279895"
      
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        event.target.reset();
      } else {
        setError("Message could not be sent. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageLayout
      label="GET IN TOUCH"
      title={<>Let's Start a <span>Conversation.</span></>}
      description="Have a question about Afghanistan or our website? Send us a message."
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label>Your Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          rows="6"
          required
        />

        <button
          type="submit"
          className="primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <Send size={17} />}
        </button>

        {submitted && (
          <p className="success-message" role="status">
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {error && (
          <p role="alert" style={{ color: "red", marginTop: "15px" }}>
            {error}
          </p>
        )}
      </form>
    </PageLayout>
  );
}






// REUSABLE PAGE LAYOUT
function PageLayout({ label, title, description, children }) {
  return (
    <main className="inner-page section-padding">
      <div className="intro-label">{label}</div>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
      <div className="page-content">{children}</div>
    </main>
  );
}

// REUSABLE FEATURE
function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon || <Compass />}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ArrowUpRight className="feature-arrow" />
    </div>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="logo footer-logo">
            Visit<span>Afghan</span><i>.</i>
          </Link>
          <p>
            Discover the beauty, culture and heritage of Afghanistan.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/destinations">Destinations</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/culture">Culture</Link>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Our Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <a href="mailto:hello@visitafghan.com">
            <Mail size={15} /> Email Us
          </a>
          <a href="#social">
            <Instagram size={15} /> Instagram
          </a>
          <a href="#social">
            <Facebook size={15} /> Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VisitAfghan. All rights reserved.</span>
        <span>Discover the Beauty of Afghanistan.</span>
      </div>
    </footer>
  );
}

// MAIN APP
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
