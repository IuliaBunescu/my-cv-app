import { useEffect, useState } from 'react';
import axios from 'axios';
import './Experience.css';

// Define the shape of your data
interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

interface Skills {
  [category: string]: string[];
}

const Experience: React.FC = () => {
  // Define state to store data from the API
  const [experience, setExperience] = useState<Job[]>([]);
  const [skills, setSkills] = useState<Skills>({});

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const experienceResponse = await axios.get('http://127.0.0.1:8000/experience');
        const skillsResponse = await axios.get('http://127.0.0.1:8000/skills');

        setExperience(experienceResponse.data);
        setSkills(skillsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  if (!experience.length || !Object.keys(skills).length) {
    return (
      <div className="loading-container">
        <img src="/flower.png" alt="Loading..." className="loading-icon" />
      </div>
    );
  }

  return (
    <div className="page experience-page">
      <h1>Professional Experience</h1>

      {experience.map((job, index) => (
        <div key={index} className="experience-item">
          <h3>{job.title} - {job.company}</h3>
          <p>{job.period} - {job.location}</p>
          <ul>
            {job.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Skills Section */}
      <h2>Skills</h2>
      <div className="skills">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skill-category">
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <div className="skill-pills">
              {skills[category].map((skill, idx) => (
                <span key={idx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
