import { profile } from '../data/profile';
import './Hobbies.css';  

const Hobbies: React.FC = () => {
  const { hobbies } = profile;

  return (
    <div className="page hobbies-page">
      <h1>Hobbies & Interests</h1>
      <p>Here are some things I enjoy doing in my free time:</p>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            <img
              src="/flower.png" 
              alt="Hobby Icon"
              className="hobby-icon"
            />
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
