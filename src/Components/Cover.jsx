import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cover.css';
import "./Footer.css"

function Cover() {
    const [currentText, setCurrentText] = useState(0);
    const texts = [
        "Your Health, Your Care",
        "Explore self-care tips and diagnosis",
        "Find natural remedies and stay healthy"
    ];

    // Cycle through texts every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText((prevText) => (prevText + 1) % texts.length);
        }, 3000); // Change text every 3 seconds
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [texts.length]);

    return (
        <div className="App">

            {/* Hero Section with Image and Animated Text */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-overlay">
                        <div className="hero-text fade-in">
                            <h1>{texts[currentText]}</h1>
                            <p>Explore self-care tips and diagnosis based on your symptoms.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="row">
                    <div className="column large-feature" id="feature1">
                        <Link to="/home">
                            <h2>Natural Remedies</h2>
                            <h3>Navigate to Home</h3>
                        </Link>
                    </div>
                    <div id="info">
                        <h2>Health and Wellness</h2>
                        <p>Explore articles and tips on maintaining a healthy lifestyle, including diet, exercise, mental health, and more.</p>
                        <p>Healthy living is more than just avoiding diseases, it’s about nurturing your mind and body with the right habits and lifestyle choices.</p>
                    </div>
                </div>
            </section>
            <section className="content">
    <div className="centered-content">
        <h2>Empowering You to Take Control of Your Health</h2>
        <p>
        At Arogya: Self Care & Diagnosis, we believe that understanding your health is the first step towards well-being. Our platform offers 
        personalized self-care tips, detailed symptom analysis, and holistic remedies to help you take charge of your health.
        Whether you're looking for advice on managing common symptoms or insights into maintaining a healthy lifestyle, Arogya is here to help.
        </p>

        <div className="screenshot">
            <img src="https://as1.ftcdn.net/v2/jpg/05/30/59/58/1000_F_530595838_JUyYTnnVCk9wKGSHBkBF7H8PFWFjPX4u.jpg" width="1920" height="400" alt="Screenshot example" />
        </div>
    </div>
</section>
<section className="content-left-right">
    <div className="content-container">
        <div className="text-content">
            <h2>Your Health, Simplified</h2>
            <p>
                Arogya is your personal health companion. Our platform offers easy access to self-diagnosis tools, natural remedies, and wellness advice tailored to your needs.
            </p>
            <p>
                Explore curated resources, track your symptoms, and find practical, natural ways to manage your health, all from the comfort of your home. Let Arogya empower you to take control of your well-being today.
            </p>

        </div>
        <div className="image-content">
            <img src="https://cdn.medicalfuturist.com/wp-content/uploads/2017/12/man-doctor-in-futuristic-medicine-medical-concept.jpg"  alt="Health tips "/>

        </div>
    </div>
</section>
<footer>
      <div className="footer-links"> {/* Changed class to className */}
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li> {/* Link to About */}
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Press Releases</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Twitter</Link></li>
            <li><Link to="#">Instagram</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><Link to="/profile">Your Account</Link></li> {/* Link to Profile */}
            <li><Link to="/services">Customer Service</Link></li> {/* Link to Services */}
            <li><Link to="#">Returns & Refunds</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><Link to="#">Sell on Arogya</Link></li>
            <li><Link to="#">Advertise</Link></li>
            <li><Link to="#">Affiliate Program</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom"> {/* Changed class to className */}
        <p>&copy; 2024 Arogya: Self Care & Diagnosis. All Rights Reserved.</p>
        <ul>
          <li><Link to="#">Terms of Service</Link></li>
          <li><Link to="#">Privacy Policy</Link></li>
          <li><Link to="#">Cookie Policy</Link></li>
        </ul>
      </div>
    </footer>
        </div>
    );
}

export default Cover;