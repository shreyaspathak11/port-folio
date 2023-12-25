import Project1 from '../assets/Bitbazaar.png';
import Project2 from '../assets/ShareQuotes.png';
import Project3 from '../assets/Instrue.png';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <p className="section__text__p1">Browse What I Just Built</p>
            <h1 className="title">PROJECTS</h1>
            
            <div className="projects-container">
                {/* Project Box 1 */}
                <div className="project-box">
                    <img src={Project1} alt="Project 1" className="project-image" />
                    <h2 className="project-name">Bitbazaar</h2>
                    <p className="project-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="project-buttons">
                        <button className="btn btn-color-1" onClick={() => window.location.href='https://github.com/'}>GitHub</button>
                        <button className="btn btn-color-2" onClick={() => window.location.href='https://demo.example.com/'}>Demo</button>
                    </div>
                </div>
        
                {/* Project Box 2 */}   
                <div className="project-box">
                    <img src={Project2} alt="Project 2" className="project-image" />
                    <h2 className="project-name">Share Quotes</h2>
                    <p className="project-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="project-buttons">
                        <button className="btn btn-color-1" onClick={() => window.location.href='https://github.com/'}>GitHub</button>
                        <button className="btn btn-color-2" onClick={() => window.location.href='https://demo.example.com/'}>Demo</button>
                    </div>
                </div>

                {/* Project Box 3 */}
                <div className="project-box">
                    <img src={Project3} alt="Project " className="project-image" />
                    <h2 className="project-name">InsTrue</h2>
                    <p className="project-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="project-buttons">
                        <button className="btn btn-color-1" onClick={() => window.location.href='https://github.com/'}>GitHub</button>
                        <button className="btn btn-color-2" onClick={() => window.location.href='https://demo.example.com/'}>Demo</button>
                    </div>
                </div>
        
                {/* Project Box 4 */}   

            </div>
        </section>
    );
}

export default Projects;
