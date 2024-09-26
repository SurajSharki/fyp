import { FaLinkedin, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GiTrophyCup, GiWhistle, GiRunningShoe } from 'react-icons/gi';
import './AboutUs.css'; // External CSS file
import about from '../../assets/about.jpeg';
import cycling from '../../assets/cyling.jpg';
import sport from '../../assets/Sports_ball__twitter_.jpg';
import coach from '../../assets/coach_one.jpg';

export default function AboutUs() {
  return (
    <div className="aboutus-bg">
      <div className="container">
        <h1 className="display-3 text-center mb-5">About SportQuest</h1>

        <section className="mb-5">
          <h2 className="h3 mb-4 d-flex align-items-center">
            <GiTrophyCup className="me-2 text-primary" />
            Our Mission
          </h2>
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted fs-5">
                At SportQuest, we're passionate about connecting aspiring athletes with the best academies and coaches to help them reach their full potential. Our platform is designed to make the search for excellence in sports education easier and more accessible than ever before.
              </p>
            </div>
            <div className="col-md-6">
              <img src={about} width="350" height="250" alt="Our Mission" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3 mb-4 d-flex align-items-center">
            <GiRunningShoe className="me-2 text-success" />
            Finding the Best Academies
          </h2>
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src={cycling} width="350" height="250" alt="Best Academies" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="text-muted fs-5">
                We've partnered with top-tier sports academies across the globe to bring you a curated selection of the finest training facilities. Our rigorous vetting process ensures that each academy meets our high standards for:
              </p>
              <ul className="list-unstyled">
                <li>State-of-the-art facilities</li>
                <li>Comprehensive training programs</li>
                <li>Experienced and qualified staff</li>
                <li>Track record of athlete success</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3 mb-4 d-flex align-items-center">
            <GiWhistle className="me-2 text-danger" />
            Connecting with Elite Coaches
          </h2>
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted fs-5">
                Our platform features profiles of world-class coaches across various sports disciplines. We believe that great coaching is the key to unlocking an athlete's potential. Our coach selection process focuses on:
              </p>
              <ul className="list-unstyled">
                <li>Proven coaching experience</li>
                <li>Specializations and areas of expertise</li>
                <li>Coaching philosophy and methods</li>
                <li>Athlete testimonials and success stories</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={coach} width="350" height="250" alt="Elite Coaches" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </section>

        <section className="bg-white p-4 rounded shadow-sm mb-5">
          <h2 className="display-6 text-center mb-4">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={coach} width="180" height="180" alt="John Doe" className="img-fluid rounded-circle shadow-sm" />
            </div>
            <div className="col-md-8">
              <h3 className="h5 mb-2">John Doe</h3>
              <p className="text-muted mb-2">Founder & CEO</p>
              <p className="text-muted fs-5">
                John is a former professional athlete with a passion for sports education. With over 15 years of experience in the industry, he founded SportQuest to bridge the gap between aspiring athletes and world-class training opportunities.
              </p>
              <div className="d-flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger">
                  <FaInstagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-success">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-info">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaXTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="h3 mb-4 d-flex align-items-center">
            <GiTrophyCup className="me-2 text-warning" />
            Join Us on Your Sports Journey
          </h2>
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src={sport} width="350" height="250" alt="Sports Journey" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="text-muted fs-5">
                Whether you're an aspiring athlete looking to take your skills to the next level or a parent seeking the best training opportunities for your child, SportQuest is here to guide you. Let's embark on this exciting sports journey together!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
