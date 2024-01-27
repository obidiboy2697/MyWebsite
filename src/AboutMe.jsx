/*
  File: AboutMe page
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/
import header from '../src/assets/header.jfif';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import verify from '../src/assets/verify.jpg';
import resumePDF from '../src/assets/resume.pdf';
import { Link } from 'react-router-dom';
import '../src/AboutMe.css';

export default function AboutMe() {
  return (
    <>
    {/* <!-- body Content Section --> */}
      <section id="skill">
        <span className="skillTitle">Expertise</span>

        <span className="skillDesc">
         My Name is Obi Christian Chetachukwu, i am from the eastern part of Nigeria, and i welcome you to my portfolio! I'm a seasoned web/graphic designer and a software/app designer with a passion for creating visually captivating and user-friendly websites that make a lasting impact. Dive into my showcase to experience the seamless fusion of creativity and functionality. 
         Whether you're seeking to establish your online presence or enhance your current site, let's join forces to breathe life into your vision. I am also undertaking and brushing up my skills by undergoing Artificial Intelligence programe, in Centennial College, Toronto, where i will be getting more knowledge in Machine Learning 
         and Robotics. Take a journey through my projects and imagine the extraordinary possibilities we can achieve together. Let's craft something exceptional!".
        </span>
        <div className="skillBar">
          <img src={ux} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
                        <p>
              A dedicated designer with a passion for innovative concepts into creative visual narratives. Allow me to take you on a visual journey through my world of design. I am Fuelled by a love for aesthetics and a keen eye for detail, I've trained myself in the art of graphic design. My approach is not just about creating designs, it's about telling stories, emotions, and leaving a lasting impression through designs.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={web} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              I am a forward-thinking designer with experience in the major areas of web development. My journey started with the fascination for the intersection of design and technology and majorly, surfing the internet, and it has since evolved into a commitment to creating super web projects and engaging websites.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={app} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Software Design</h2>
            <p>
              The world today and Landscape of Software Development. In the world of software technology, software development stands out as a vibrant and evolving environment With the relentless growth and the constant demand for innovative applications, developers find themselves in a race to modify softwares that not only meet user expectations but also push the boundaries of what is possible.
            </p>
          </div>
        </div>

        {/* Button for Resume */}
        <div className="resumeButton">
          <Link to={resumePDF} target="_blank" download>
            <button className="btn">Click to Explore My Resume</button>
          </Link>
        </div>
      </section>
    </>
  );
}
