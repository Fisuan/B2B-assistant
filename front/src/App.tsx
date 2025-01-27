import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ChatPage from './pages/ChatPage';
import Navigationnn from './components/Navigationnn';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navigationnn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatpage" element={<ChatPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;