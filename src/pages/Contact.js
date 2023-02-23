import React from 'react';
import GithubIcon from '../img/github.svg';
import TwitterIcon from '../img/twitter.svg';
import InstagramIcon from '../img/instagram.svg';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-icon-container">
        <a
          href="https://github.com/askalamentor"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} alt="Github link" />
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <img src={TwitterIcon} alt="Twitter link" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <img src={InstagramIcon} alt="Instagram link" />
        </a>
      </div>
    </div>
  );
}
