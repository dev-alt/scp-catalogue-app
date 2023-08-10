import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './ThemeProvider';
import LoadingPage from './components/LoadingPage';
import Body from './components/Body';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleUnlock = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <CustomThemeProvider>
        <Header />
        <Navigation isLocked={isLoading} />
        <Routes>
          {isLoading ? (
            <Route path="/" element={<LoadingPage onUnlock={handleUnlock} />} />
          ) : (
            <Route path="/" element={<Body />} />
          )}
        </Routes>
        <Footer />
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
