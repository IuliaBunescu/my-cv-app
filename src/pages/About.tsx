import { useEffect, useState } from 'react';
import axios from 'axios';
import './About.css';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

// Define the shape of your data
interface Personal {
  name: string;
  date_of_birth: string;
  bio: string;
  email: string;
  linkedIn: string;
  address: string;
}

interface Education {
  degree: string;
  school: string;
  period: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
  period: string;
}

interface Language {
  language: string;
  level: string;
}

const About: React.FC = () => {
  // Define state to store data from API
  const [personal, setPersonal] = useState<Personal | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personalResponse = await axios.get('http://127.0.0.1:8000/personal');
        const educationResponse = await axios.get('http://127.0.0.1:8000/education');
        const projectsResponse = await axios.get('http://127.0.0.1:8000/projects');
        const languagesResponse = await axios.get('http://127.0.0.1:8000/languages');

        setPersonal(personalResponse.data);
        setEducation(educationResponse.data);
        setProjects(projectsResponse.data);
        setLanguages(languagesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  if (!personal) {
    return (
      <div className="loading-container">
        <img src="/flower.png" alt="Loading..." className="loading-icon" />
      </div>
    );
  }

  return (
    <div className="page about-page"> {/* Add about-page class here */}
      <div className="name-and-info">
        <div className="bio">
          <h1>{personal.name}</h1>
          <h3>Bio</h3>
          <p>{personal.bio}</p>
        </div>

        {/* General Info Section */}
        <div className="general-info">
          <p>
            <FaBirthdayCake style={{ marginRight: '10px' }} />
            <strong>{personal.date_of_birth}</strong>
          </p>
          <p>
            <FaEnvelope style={{ marginRight: '10px' }} />
            <a href={`mailto:${personal.email}`} className="email-link">{personal.email}</a>
          </p>
          <p>
            <FaLinkedin style={{ marginRight: '10px' }} />
            <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer">iulia-bunescu</a>
          </p>
          <p>
            <FaMapMarkerAlt style={{ marginRight: '10px' }} />
            <strong>{personal.address}</strong>
          </p>
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
