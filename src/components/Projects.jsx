import Project1 from '../assets/Bitbazaar.png';
import Project2 from '../assets/ShareQuotes.png';
import Project3 from '../assets/Instrue.png';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <p className="section__text__p1">Browse what I just built</p>
            <h1 className="title"> My Projects</h1>
            
            <div className="projects-container">
                {/* Project Box 1 */}
                <div className="project-box">
                    <img src={Project1} alt="Project 1" className="project-image" />
                    <h2 className="project-name">Bitbazaar</h2>
                    
                    <p className="project-details" >
                    <ul>
                        <li>Used "CoinGecko" API to collect real-time data on cryptocurrency prices and market metrics.</li>
                        <li>Applied data transformation techniques, like currency conversions.</li>
                        <li>Developed dynamic charts and graphs for intuitive visualization of cryptocurrency trends.</li>
                        <li>BitBazaar is a user-friendly website providing users cryptocurrency knowledge.</li>
                    </ul>
                    <b>React.js, Chakra-UI, Node.js, Express.js, MongoDB</b>    
                    </p>
                    <div className="project-buttons">
                        <button className="btn project-btn" onClick={() => window.location.href='https://github.com/'}>GitHub</button>
                        <button className="btn project-btn" onClick={() => window.location.href='https://demo.example.com/'}>Demo</button>
                    </div>
                </div>
        
                {/* Project Box 2 */}   
                <div className="project-box">
                    <img src={Project2} alt="Project 2" className="project-image" />
                    <h2 className="project-name">Share Quotes</h2>
                    <p className="project-details">
                    <ul>
                        <li>Developed a CRUD API for efficient quotes management.</li>
                        <li>Implemented user authentication for account access, enabling users to effortlessly create, update, and delete their quotes through a simple and user-friendly design.</li>
                        <li>Learned about Server-side rendering and static site generation using Next.js</li>
                    </ul>
                    <b>Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Google OAuth.</b>
                </p>

                    <div className="project-buttons">
                        <button className="btn project-btn" onClick={() => window.location.href='https://github.com/'}>GitHub</button>
                        <button className="btn project-btn" onClick={() => window.location.href='https://demo.example.com/'}>Demo</button>
                    </div>
                </div>

                {/* Project Box 3 */}
                <div className="project-box">
                    <img src={Project3} alt="Project " className="project-image" />
                    <h2 className="project-name">InsTrue</h2>
                    <p className="project-details">
                        <ul>
                            <li>Designed a webpage to highlight my frontend skills.</li>
                            <li>Developed a mock page for a fictional mobile app, showcasing its features and user feedback.</li>
                            <li>Ensured a responsive design catering to mobile, tablet, and desktop users.</li>
                            <li>Learned about CSS tools such as Flexbox and Grid for layout optimization.</li>
                        </ul>
                        <b>HTML, CSS</b>
                    </p>

                    <div className="project-buttons">
                        <button className="btn project-btn" onClick={() => window.location.href='https://github.com/'}>GitHub</button>
                        <button className="btn project-btn" onClick={() => window.location.href='https://demo.example.com/'}>Demo</button>
                    </div>
                </div>
        
                {/* Project Box 4 */}   

            </div>
        </section>
    );
}

export default Projects;
