/*
  File: Home page
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/



import React from 'react';
import { Link } from 'react-router-dom';
import header from '../src/assets/header.jfif';
import verify from './../src/assets/verify.jpg';
import '../src/index.css';

export default function Home() {
  return (
     //     {/* <!-- body Content Section --> */}
    <section id="intro">
      <div className="introContent">
        <div align="right">
          <span className="introText">
            <span className="introName">Obi Christian Chetachuwkwu</span>
            <img src={header} alt="profile" className="header" width="70" height="70" align="left" />
            <br />
            Website Developer
          </span>
        </div>
        <p className="introPara">
          Hi guys, welcome to my web page, I specialize in crafting visually and user-friendly websites that leave a lasting impression. Explore my portfolio to witness the seamless blend of creativity and functionality.
          Whether you're looking to establish your online presence or revamp your existing site, let's collaborate to bring your vision to life. Browse through my work and envision the possibilities. Let's build something extraordinary together!
        </p>

         {/* Button for more about me */}
        <Link to="/aboutMe" className="btn">
          <img src={verify} alt="verify" width="50px" height="50px" />
        </Link>
      </div>
    </section>
  );
}
