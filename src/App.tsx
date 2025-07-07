import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import APIPage from './pages/APIPage';
import { ThemeProvider } from './context/ThemeContext';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <main className="flex-grow p-4">
            <Routes>
              <th="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/api" element={<APIPage />} />
              <Route path="/api-data" element={<APIPage />} />
            </Routes>
          </main>
          <h1>"HELLO CHIBUZOR"</h1>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;Route pa
