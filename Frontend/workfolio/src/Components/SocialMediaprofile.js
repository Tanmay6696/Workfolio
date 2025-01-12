import React from 'react'
import '../Allcomponentfile.css'
import '../Componentcss/SocialMediaprofiles.css'
import { FaInstagram, FaLinkedin, FaFacebookSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Header from './Header'
const SocialMediaprofile = () => {
  return (
    <div className="SocialMediaprofile">
      <div className="interactive-card">
        <div className="social-media">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            className="social-icon facebook"
          >
            <i className="fab fa-facebook-f">
              <FaFacebookSquare />
            </i>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            className="social-icon twitter"
          >
            <i className="fab fa-twitter">
              <FaSquareXTwitter />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/mayur-j41739/"
            target="_blank"
            className="social-icon linkedin"
          >
            <i className="fab fa-linkedin-in">
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://www.instagram.com/mayurjadhav41739"
            target="_blank"
            className="social-icon instagram"
          >
            <i className="fab fa-instagram">
              <FaInstagram />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaprofile