import { Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css"; // Import the external CSS file

export default function Footer() {
  return (
    <footer className="footer bg-dark py-4 text-light">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h3 className="footer-title mb-3">SportQuest Academy Center</h3>
            <img src="./logo.png" alt="Academy Logo" className="footer-logo" />
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle mb-2">Location</h4>
            <p className="footer-text d-flex align-items-center">
              <MapPin className="footer-icon me-2" />
              Maitidevi Kathmandu
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle mb-2">Contact</h4>
            <p className="footer-text d-flex align-items-center">
              <Mail className="footer-icon me-2" />
              sportquest.info@gmail.com
            </p>
            <p className="footer-text d-flex align-items-center">
              <Phone className="footer-icon me-2" />
              (+977) 9866548773
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle mb-2">Follow Us</h4>
            <div className="footer-social-icons d-flex gap-2">
              {[
                { name: "Facebook", icon: "fab fa-facebook-f" },
                { name: "Twitter", icon: "fab fa-twitter" },
                { name: "Instagram", icon: "fab fa-instagram" },
                { name: "LinkedIn", icon: "fab fa-linkedin-in" },
              ].map((social) => (
                <a key={social.name} href="#" className="footer-social-link">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
