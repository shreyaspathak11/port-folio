import profilePic from '../assets/profile.jpg'; // Adjust the path accordingly
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import Youtube from '../assets/youtube.png';
import Instagram from '../assets/instagram.png';


const Profile = () => {
  return (
    <>
    <section id="profile" className="profile">
      <div className="section__pic-container">
        <img 
        src={profilePic}
        alt="Shreyas Pathak"
        className="profile-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm </p>
        <h1 className="title">Shreyas Pathak</h1>
        <p className="section__text__p2">an Aspiring Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/resume-example.pdf')}>
            Resume
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = './contact'}>
            Contact
          </button>
        </div>
        
        <div id="socials-container" className="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/'}
            />
          <img
            src={Youtube}
            alt="My Youtube profile"
            className="icon"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
          <img
            src={Instagram}
            alt="My Instagram profile"
            className="icon"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
        </div> 
          
        
      </div>
    </section>

    </>
  );
};

export default Profile;
