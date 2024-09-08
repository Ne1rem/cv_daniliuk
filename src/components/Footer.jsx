import React from 'react';

import '../styles/Footer.css';

import linkedinIcon from '../assets/images/icons/linkedin.svg';
import githubIcon from '../assets/images/icons/github.svg';
import telegramIcon from '../assets/images/icons/telegram.svg';

function Footer() {
  return (
    <footer className="footer" id='contact'>
      <div className="container">
      <div className='footerName'>
      <p className='footerNameSurname'>Anatoliy Daniliuk</p>
      <p className='footerPosition'><span className='footerSpan'>Front-end</span> developer</p>
      
      </div>
      <div className='footerSocialMedias'>
      <p>My social medias</p>
      <div className="footer-social-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anatoliy-daniliuk-5006a819a/"
        >
          <img
            className="footer-svg-icons"
            src={linkedinIcon}
            alt="linkedin"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ne1rem"
        >
          <img
            className="footer-svg-icons"
            src={githubIcon}
            alt="github"
            width="25"
            height="28"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/tolik_dnlk"
        >
          <img
            className="footer-svg-icons"
            src={telegramIcon}
            alt="telegram"
            width="25"
            height="28"
          />
        </a>
      </div>
      </div>
      <div className='footerPhones'>
      <a target="_blank"
          rel="noopener noreferrer" href="https://www.linkedin.com/in/anatoliy-daniliuk-5006a819a/"><button className='contactMe'>Contact me</button></a>

      <div className="footer-contact">
       <a href="tel:+380501649202" className='phoneFoot'>+380501649202</a>
       <a href="tel:+380985158459" className='phoneFoot'>+380985158459</a>
      </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
