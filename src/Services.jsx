/*
  File: service.css page
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/
import React from 'react';
import './services.css';

export default function Services() {
  return (
     // <!-- Main Content Section -->
    <div className="services-container">
      <h2>My Services</h2>
      <ol>
        <li>
          <p className="service-title"> User-Centric Web Design:</p>
          <p className="service-description">
            Crafting visually stunning and user-centric interfaces that captivate visitors. From initial wireframes to the final pixel, I specialize in creating engaging digital experiences that align with your brand and resonate with your audience.
          </p>
        </li>
        <li>
          <p className="service-title"> Responsive Design Expertise:</p>
          <p className="service-description">
            Ensuring your website looks impeccable on all devices. I implement responsive design techniques to guarantee a seamless user experience, regardless of the screen size or platform.
          </p>
        </li>
        <li>
          <p className="service-title"> Prototyping and User Flow:</p>
          <p className="service-description">
            Transforming ideas into interactive prototypes. I utilize wireframing techniques to plan the layout and user flow, allowing for collaboration and refinement before the final design is implemented.
          </p>
        </li>
        <li>
          <p className="service-title"> Usability and UX Design:</p>
          <p className="service-description">
            Prioritizing usability and a positive user experience. Your website not only looks good but is also intuitive and easy to navigate, enhancing user satisfaction and engagement.
          </p>
        </li>
        <li>
          <p className="service-title"> Collaboration with Developers:</p>
          <p className="service-description">
            Seamless collaboration with developers to translate design visions into reality. Clear communication on design specifications, interactions, and overall aesthetics to ensure a cohesive and effective end product.
          </p>
        </li>
        <li>
          <p className="service-title"> Custom Software Development:</p>
          <p className="service-description">
            Crafting tailor-made applications and systems to meet your specific needs. From concept to code, I bring ideas to life, solving problems and delivering high-quality software solutions.
          </p>
        </li>
      </ol>
    </div>
  );
}
