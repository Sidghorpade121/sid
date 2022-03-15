import Navigation from "./components/Navigation";
import React from "react";
import './App.css';
import { Route, BrowserRouter, Routes,Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Find from './pages/FindHotel';
import Contact from './pages/ContactUS';
import About from './pages/AboutUS';
import NoPage from './pages/NoPage';
import Login from "./pages/Login";
import LocationMap from "./pages/LocationMap";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    
    <Menu/>
    <BrowserRouter>
    <Routes>
      <Route path="/" component={<App />}>
        <Route index element={<Home />} />
        <Route exact path="/Find" element={<Find />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/ContactUS" element={<Contact />} />
        <Route exact path="/AboutUs" element={<About />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Map" element={<LocationMap />} />
        <Route exact path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
<Services />
  </>
  );
}
export default App;