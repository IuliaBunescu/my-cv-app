import { useEffect, useState } from 'react';
import './Hobbies.css';

const Hobbies: React.FC = () => {
  // Define state to store hobbies data
  const [hobbies, setHobbies] = useState<string[]>([]);

  // Fetch hobbies data from the backend API
  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/hobbies');
        const data = await response.json();
        const names = data.map((hobby: { name: string }) => hobby.name);
        setHobbies(names);
      } catch (error) {
        console.error('Error fetching hobbies:', error);
      }
    };

    fetchHobbies();
  }, []); // Empty dependency array to only run once on mount

  if (!hobbies.length) {
    return (
      <div className="loading-container">
        <img src="/flower.png" alt="Loading..." className="loading-icon" />
      </div>
    );
  }

  return (
    <div className="page hobbies-page">
      <h1>Hobbies & Interests</h1>
      <p>Here are some things I enjoy doing in my free time:</p>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            <img src="/flower.png" alt="Hobby Icon" className="hobby-icon" />
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
