import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css';

function App() {

  return (
    <Router basename="/Talentime">
      <Routes>
        <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;