// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import MerchantLogin from './pages/MerchantLogin';
import UserLogin from './pages/UserLogin';
import MerchantDashboard from './pages/MerchantDashboard';
import UserDashboard from './pages/UserDashboard';
import BusDetails from './pages/BusDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Landing page with navbar */}
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          } />
          
          {/* Bus details page */}
          <Route path="/bus/:id" element={<BusDetails />} />
          
          {/* Auth pages with navbar */}
          <Route path="/register" element={
            <>
              {/* <Navbar /> */}
              <Register />
            </>
          } />
          <Route path="/login" element={
            <>
              {/* <Navbar /> */}
              <UserLogin />
            </>
          } />
          <Route path="/merchant/login" element={
            <>
              {/* <Navbar /> */}
              <MerchantLogin />
            </>
          } />
          
          {/* Dashboard pages without navbar (they have their own navigation) */}
          <Route path="/merchant/dashboard" element={<MerchantDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;