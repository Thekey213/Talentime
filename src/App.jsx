import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>My Simple App</h1>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
