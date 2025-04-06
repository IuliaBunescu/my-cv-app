import { profile } from '../data/profile';
import './Experience.css';

const Experience: React.FC = () => {
  const { experience, skills } = profile;

  return (
    <div className="page experience-page">
      <h1>Professional Experience</h1>

      {experience.map((job, index) => (
        <div key={index} className="experience-item"> 
          <h3>{job.title} - {job.company}</h3>
          <p> {job.period} - {job.location}</p>
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
              {skills[category as keyof typeof skills].map((skill, idx) => (
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
