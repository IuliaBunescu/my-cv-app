import { profile } from '../data/profile';
import './About.css';
import { FaLinkedin, FaEnvelope,  FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'; 

const About: React.FC = () => {
const { personal, education, projects, languages  } = profile;

return (
    <div className="page about-page">  {/* Add about-page class here */}
        <div className="name-and-info">
            <div className='bio'>
                <h1>{personal.name}</h1>
                <h3>Bio</h3>
                    <p>{personal.bio}</p>
            </div>

            {/* General Info Section */}
            <div className="general-info">
            <p> 
                <FaBirthdayCake style={{ marginRight: '10px' }} /> 
                <strong>{personal.dateOfBirth}</strong></p>
            <p> 
                <FaEnvelope style={{ marginRight: '10px' }} /> 
                <a href={`mailto:${personal.email}`}>{personal.email}</a></p>
            <p> 
                <FaLinkedin style={{ marginRight: '10px' }} /> 
                <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer">iulia-bunescu</a> </p>
            <p>  <FaMapMarkerAlt style={{ marginRight: '10px' }} /> 
                <strong>{personal.address}</strong></p>
            </div>
        </div>
        
        {/* Education Section */}
        <h3>Education</h3>
        <ul>
            {education.map((degree, index) => (
            <li key={index}>
                <strong>{degree.degree}</strong>  
                <p>({degree.period})</p>
            </li>
            ))}
        </ul>

        {/* Personal Projects Section */}
        <h3>Personal Projects</h3>
        <ul>
            {projects.map((project, index) => (
            <li key={index}>
                <strong>{project.title}</strong> <br />
                <em>{project.period}</em> <br />
                <p>{project.description}</p>
                {/* Display the project links as pills */}
                <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub Link
                </a>
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                    </a>
                )}
                </div>
            </li>
            ))}
        </ul>
        {/* Languages Section */}
        <h3>Languages</h3>
        <div className="languages">
            {languages.map((lang, index) => (
            <span key={index} className="language-pill">
                {lang.language} - {lang.level}
            </span>
            ))}
        </div>

    </div>
);
};

export default About;
