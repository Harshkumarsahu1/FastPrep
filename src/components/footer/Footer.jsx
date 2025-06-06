import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 FastPrep Platform. All rights reserved. <br /> Made
          with ❤️ <a href="https://github.com/Harshkumarsahu1">Harsh Kumar Sahu</a>
        </p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/harshk7/">
            <FaLinkedin />
          </a>
          <a href="mailto:2000harshsahu@gmail.com">
            <IoIosMail />
          </a>
          <a href="https://x.com/HarshSa32437724">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
