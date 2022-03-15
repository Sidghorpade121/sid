import React, { Component } from "react";
import { FaCocktail,FaCreativeCommons, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { WiDayCloudy } from "react-icons/wi";
import { BsWifi } from "react-icons/bs";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
      //   info:
      // "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <BsWifi />,
        title: "Free Wifi Sevice",
        
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Cab Service",
       
      },
      {
        icon: <WiDayCloudy />,
        title: "Weather",
      
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                
              </article>
              
            );
          })}
          
        </div>
        
                <br/><br/> <br/><br/><br/><br/>
                <hr/>
        <p align="bottom">
    Copyright © 2012 Indian Hotel. All rights reserved. 
    </p>
      </section>
    );
  }
}
