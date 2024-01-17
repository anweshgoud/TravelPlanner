import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Combination from './components/ContainPages/ComBination';
import Asian from './components/Asia_Countries/Asia_Country_Wise';
import CountryPlans from './components/Asia_Countries/CountryPlans';
import MainSign from './components/2-Signup/2-MainSignup';
import LoginMain from './components/1-Login/1-Login';
import Main from './components/home/main2';
import HeaderContains from './components/ContainPages/Headercontain';
import Footer from './components/ContainPages/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Features from './components/ContainPages/Features';
import Dashboard from './components/ContainPages/dashboard';
import Completed from './components/ContainPages/Completed';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
  }, [location]);

  return (
    <>
      {(location.pathname === '/continents' || location.pathname === '/country' || location.pathname === '/Countryplans' || location.pathname === '/dashboard' || location.pathname === '/features' || location.pathname === '/completed') && (
        <HeaderContains />
      )}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<LoginMain />} />
        <Route exact path="/signup" element={<MainSign />} />
        <Route exact path="/continents" element={<Combination />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path="/country" element={<Asian />} />
        <Route exact path="/Countryplans" element={<CountryPlans />} />
        <Route exact path='/features' element={<Features />} />
        <Route exact path='/completed' element={<Completed />} />
      </Routes>
      {(location.pathname === '/continents' || location.pathname === '/country' || location.pathname === '/Countryplans' || location.pathname === '/dashboard' || location.pathname === '/completed' || location.pathname === '/features') && (
        <Footer />
      )}
    </>
  );
}

export default App;
