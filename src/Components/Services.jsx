// Services.js
import React from "react";
import "./Services.css";
import "./Footer.css";
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "Online Consultation",
    description:
      "Consult with well trained model from the comfort of your home through video calls or chat.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.awW-78zQWmL3j0sD7Bi4agHaH9?w=651&h=700&rs=1&pid=ImgDetMain/300",
  },
  {
    title: "Health Assessments",
    description:
      "Comprehensive health assessments to identify risk factors and improve your overall health.",
    imageUrl: "https://fst.net.au/wp-content/uploads/Digital-Health.jpg",
  },
  {
    title: "Medication Suggestion",
    description:
      "Our medication has great effects on patients it was trustworthy",
    imageUrl:
      "https://th.bing.com/th/id/OIP.cd2doI9_dbcZPNlJlcLipAHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7/300",
  },
  {
    title: "Wellness Programs",
    description:
      "Personalized wellness programs designed to help you achieve your health goals.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.j8pZ2dCfMStvDqDCsRRv2QHaDV?rs=1&pid=ImgDetMain",
  },
  {
    title: "Fitness Integration",
    description:
      "Personalized workout plans, virtual fitness assessments, and real-time posture correction. Track your progress and connect with fitness wearables.",
    imageUrl:
      "https://www.matherhospital.org/wp-content/uploads/2021/05/Why-exercise-is-self-care-5.28.2021.jpg",
  },
  {
    title: "Educational Resources",
    description:
      "Access comprehensive health information through video tutorials, articles, and expert-led webinars. Learn about disease prevention, nutrition, and wellness.",
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2087166328/display_1500/stock-vector-healthy-mentality-and-self-care-illustration-set-happy-woman-feel-confident-relax-accept-and-2087166328.jpg",
  },
  {
    title: "Alternative Medicine",
    description:
      "Explore holistic healing with Ayurvedic consultation, yoga therapy, meditation guides, and natural remedies tailored to your needs.",
    imageUrl:
      "https://media.istockphoto.com/id/1315042436/photo/woman-prepares-aromatherapy-session-at-the-table-with-essential-oil-diffuser-medical-herbs.jpg?s=612x612&w=0&k=20&c=dlNEkqxiqITAN3AHctiaWnlSSgNk2-bGKWbmoIOx6Yo=",
  },
  {
    title: "Follow-up Care",
    description:
      "Stay on track with smart reminders for medications, exercises, and appointments. Monitor your progress with digital health tracking tools.",
    imageUrl:
      "https://images.hiverhq.com/blog/wp-content/uploads/2022/02/tr:pr-true/The-Ultimate-Guide-to-Customer-Follow-Up-Free-Email-Templates-Included.png",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
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
};

export default Services;