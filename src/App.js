import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './ThemeProvider';
import LoadingPage from './components/LoadingPage';
import Body from './components/Body';
import SCPFiles from './components/SCPFiles';
import AddEntry from './components/AddEntry';
import Catalog from './components/Catalog.js';
import Data from './assets/scpData.json';

function App() {
  const scpEntries = Data.sort((a, b) => a.number.localeCompare(b.number));

  // Retrieve the isLoading state from localStorage, or default to true
  const [isLoading, setIsLoading] = useState(localStorage.getItem('isLoading') === 'true' || true);

  useEffect(() => {
    if (isLoading) {
      // Set isLoading to false in localStorage after unlocking
      localStorage.setItem('isLoading', 'false');
    }
  }, [isLoading]);

  const handleUnlock = () => {
    setIsLoading(false);
  };


  return (
    <Router>
      <CustomThemeProvider>
        <Header isLocked={isLoading} />
        <Navigation isLocked={isLoading} scpEntries={scpEntries} />

        <Routes>
          {isLoading ? (
            <Route path="/" element={<LoadingPage onUnlock={handleUnlock} />} />
          ) : (
            <Route path="/" element={<Body />} />
          )}
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/addEntry" element={<AddEntry />} />
          <Route path="/scp/:scpId" element={<SCPFiles scpEntries={scpEntries} />} />
        </Routes>

        <Footer isLocked={isLoading} />
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
