import { Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css"; // Import the external CSS file

export default function Footer() {
  return (
    <footer className="footer-section bg-dark py-4 text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer-title mb-3">SportQuest Academy Center</h3>
            <img src="./logo.png" alt="Academy Logo" className="footer-logo" />
          </div>
          <div className="col-md-3">
            <h4 className="footer-subtitle mb-2">Location</h4>
            <p className="d-flex align-items-center">
              <MapPin className="me-2" />
              Maitidevi Kathmandu
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="footer-subtitle mb-2">Contact</h4>
            <p className="d-flex align-items-center">
              <Mail className="me-2" />
              sportquest.info@gmail.com
            </p>
            <p className="d-flex align-items-center">
              <Phone className="me-2" />
              (+977) 9866548773
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="footer-subtitle mb-2">Follow Us</h4>
            <div className="d-flex gap-2">

          {[
            { name: "Facebook", icon: "fab fa-facebook-f" },
            { name: "Twitter", icon: "fab fa-twitter" },
            { name: "Instagram", icon: "fab fa-instagram" },
            { name: "LinkedIn", icon: "fab fa-linkedin-in" }
            ].map((social) => (
                <a key={social.name} href="#" className="text-light hover-opacity">
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
