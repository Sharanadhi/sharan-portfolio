import { Slide,Fade,Zoom } from "react-awesome-reveal";


import './About.scss';

function About() {
  return (
    <section id='about' className="about">
      <div className='about__header'>
          <h2 className="about__heading">ABOUT ME</h2>
          <hr className='underline'/>
        <Slide>
          <p className="about__text">
            Here you will find more information about me, what I do, 
            and my current skills. 
          </p>
        </Slide>
      </div>
      <div className='about__container'>
        <div className='about__content'>
          <h3 className="about__content-heading">Get to know me!</h3>
          <Zoom duration={2000}>
          <p className="about__content-text">
            I&apos;m a Full Stack Developer building and managing both the Front-end and Back-end of Websites and Web Applications, contributing to the overall success of the product. Check out some of my work in the Projects section.
          </p>
          <p className="about__content-text">
            I also enjoy sharing content related to what I&apos;ve learned over the years in Full Stack Development to help others in the Dev Community. Feel free to connect or follow me on my LinkedIn where I post useful content related to Web Development and Programming.
          </p>
          <p className="about__content-text">
            I&apos;m open to job opportunities where I can contribute, learn, and grow. If you have an opportunity that matches my skills and experience, please contact me. Let&apos;s create something amazing together!
          </p>
          </Zoom>
        </div>
        <div className='about__skills'>
          <h3 className="about__skills-heading">My Skills</h3>
          <div className="about__skills-container">
          <Fade delay={1000} cascade damping={0.1}>
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>SASS</p>
            <p>JavaScript</p>
            <p>Node js</p>
            <p>React js</p>
            <p>Express js</p>
            <p>Knex js</p>
            <p>MySQL</p>
            <p>postgreSQL</p>
            <p>Figma</p>
            <p>Git</p>
            <p>Python</p>
            </Fade>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;