import React from 'react';
import Navigation from '../components/Navigation';
import { Button, Navbar, Nav, Form, NavDropdown, FormControl,Container } from 'react-bootstrap';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Searchform from '../components/form';
function Home(){
    return(
      <Hero>
      <Banner
        title="luxurious rooms"
        subtitle="deluxe rooms starting at $299"
      >

        
      </Banner>
    </Hero>
    )
}
export default Home;