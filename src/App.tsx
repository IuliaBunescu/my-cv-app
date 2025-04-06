import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
