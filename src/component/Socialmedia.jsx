import React from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-container">
      <div className="social-box glass-box">
        <h1 className="social-title">SOCIAL MEDIA</h1>

        <div className="social-links">
          <a
            href="https://x.com/NUUKE_TOKEN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaTwitter className="icon twitter" />
            <span>Twitter (X)</span>
          </a>

          <a
            href="https://t.me/nuuke_token"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaTelegramPlane className="icon telegram" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
