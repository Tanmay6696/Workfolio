import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebookSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import '../Componentcss/CodingProfiless.css'

import Header from './Header'

const CodingProfiles = () => {
  return (
    < >
        <div className="social-media">
        <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            className="social-icon leetcode"
          >
            <i className="fab fa-facebook-f">
              <SiLeetcode />
            </i>
          </a>
          {/* <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            className="social-icon leetcode"
          >
            <i className="fab fa-facebook-f">
              <SiLeetcode />
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
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            className="social-icon instagram"
          >
            <i className="fab fa-instagram">
              <FaInstagram />
            </i>
          </a> */}
        </div>
    </>
  )
}

export default CodingProfiles

