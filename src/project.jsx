/*
  File: project.jsx page
  Student’s Name: [Obi christian C]
  StudentID: [301329284]
  Date: [27th-01-2024]
*/
import project1 from '../src/assets/project1.jpg';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
       {/* <!-- body Content Section --> */}
     <section id="works">
         
          <h2 className="worksTitle">My Achievements:</h2>
          <span className="worksDesc"> "In my projects, my commitment to meticulous attention to detail is akin to crafting a visual masterpiece. Picture-perfect layouts are my signature, 
          ensuring every pixel contributes to an elevated user experience. As a web developer, I relish the thrill of seamlessly weaving together interfaces that gracefully transcend device boundaries.
          In the realm of software design, my approach is an artful partern of innovation. Each line of code is a stroke on the canvas, creating solutions that not only meet but exceed the unique needs of businesses.
 The graphical prowess showcased in most pictures below this write up is a testament to this commitment to pushing boundaries.

With a focused on precision and an unwavering commitment to excellence, I take pride in bringing digital experiences that not only meet expectations. 
but stands as a shining example of how my work goes beyond the just creativity, creating compelling digital narratives that not only help businesses achieve their objectives but establish a robust online presence that commands attention."
Feel free to view the pictorial representation of my projects below</span> 
          <div className="worksImgs">
                   <img src={project1} alt="project1" className="worksImg" />
                   <img src={project2} alt="project2" className="worksImg" />
                   <img src={project3} alt="project3" className="worksImg" />
                   <img src={project4} alt="project4" className="worksImg" />
                   <img src={project5} alt="project5" className="worksImg" />
                   <img src={project6} alt="project6" className="worksImg" />
                  
               
               </div>
{/* Button for see more */}
          <button className="workBtn">See More</button>
                  
                  
     </section>
    

     </>
    }
    