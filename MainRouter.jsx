/*
  File: MainRouter.jsx page
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Layout from './components/layout'// Corrected import path
import AboutMe from './src/AboutMe'
import ContactMe from './src/ContactMe'
import Project from './src/project'
import Services from './src/Services'

const MainRouter = () => {
  return (
    <div>
      {/* <!-- Main Content Section --> */}
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AboutMe" element={<AboutMe />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/ContactMe" element={<ContactMe />} />
      </Routes>

    </div>
  )
}

export default MainRouter;