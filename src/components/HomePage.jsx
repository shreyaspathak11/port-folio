import './Homepage.css'; // Import the corresponding CSS file
import profileImage from '../images/profile.jpg'; // Replace with the correct path to your profile image

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="text-container">
        <h1>Hi! This is Shreyas Pathak</h1>
        <p>Welcome to my portfolio. I am an aspiring developer...</p>
        {/* Add more text or sections as needed */}
      </div>
    </div>
  );
};

export default HomePage;
