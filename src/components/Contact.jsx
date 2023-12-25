import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
    <p className="section__text__p1">Let's get in touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-container">
        <p className="contact-info">
          Feel free to reach out via email:
          <br />
          <a href="mailto:shreyaspathak.ofc@gmail.com" className='section__text__p1'>
            <span className="email-icon">@</span> click here
          </a>
        </p>

        <div className="contact-buttons">
          <button className="btn project-btn" onClick={() => window.open('https://drive.google.com/file/d/1Qxp_gnfdPxjPg9gc686XrMXzPX9lPthE/view?usp=sharing')}>
            Resume
          </button>
          <button className="btn project-btn" onClick={() => window.location.href = './contact'}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
