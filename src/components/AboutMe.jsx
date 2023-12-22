import React from 'react';
import school from '../assets/school.png';
import highschool from '../assets/high.png';
import graduate from '../assets/graduated.png';

const AboutMe = () => {
  return (
    <div className="about">
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">EDUCATION</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">

              <div className="education-box" id="middle-school">
                <div className="education-info">
                  <img src={school} className="about-pic" alt="school" />
                  <h2>Amrita Vidyalayam, Durgapur</h2>
                  <p className="date">2005 - 2018</p>
                  <p className="class">CBSE X</p>
                  <p className="gpa">88%</p>
                </div>
              </div>

              <div className="education-box" id="high-school">
                <div className="education-info">
                  <img src={highschool} className="about-pic" alt="highschool" />
                  <h2>Amrita Vidyalayam, Durgapur</h2>
                  <p className="date">2018 - 2020</p>
                  <p className="class">CBSE XII</p>
                  <p className="stream">Science</p>
                  <p className="gpa">91.34%</p>
                </div>
              </div>

              <div className="education-box" id="graduate-school">
                <div className="education-info">
                  <img src={graduate} className="about-pic" alt="graduate" />
                  <h2>Jadavpur University, Kolkata</h2>
                  <p className="degree">Bachelors' of Engineering</p>
                  <p className="date">2021 - 2025</p>
                  <p className="stream">Chemical Engineering</p>
                  <p className="gpa">GPA: 7.44</p>
                </div>
              </div>

            </div>
            
          </div>
          
        </div>

        <div className="about-containers">
              <div className="about-me">
                <h2>Who am I?</h2>
                <p>
                  I am a 19 year old student pursuing Bachelors' of Engineering in Chemical Engineering from Jadavpur University. I am a passionate learner and a curious person. I love to explore new things and learn new skills. I am a self-taught web developer and a competitive coder. I am interested in Data Science and Machine Learning. I am also interested in the field of finance and economics.
                </p>
              </div>
              <div className="about-me">
                <h2>What are my hobbies?</h2>
                <p>
                  I love to play chess and I am a chess enthusiast. I am also a big fan of football and I support Manchester United. I love to read books and my favourite book is The Alchemist by Paulo Coelho. I also love to watch movies and my favourite movie is The Shawshank Redemption.
                </p>
              </div>
              </div>
      </section>
    </div>
  );
};

export default AboutMe;
