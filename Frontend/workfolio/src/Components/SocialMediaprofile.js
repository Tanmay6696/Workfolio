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
        <div class="social-media">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            class="social-icon facebook"
          >
            <i class="fab fa-facebook-f">
              <FaFacebookSquare />
            </i>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            class="social-icon twitter"
          >
            <i class="fab fa-twitter">
              <FaSquareXTwitter />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/mayur-j41739/"
            target="_blank"
            class="social-icon linkedin"
          >
            <i class="fab fa-linkedin-in">
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            class="social-icon instagram"
          >
            <i class="fab fa-instagram">
              <FaInstagram />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaprofile