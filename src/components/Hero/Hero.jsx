
import { FaLinkedin,FaGithub,FaSpotify } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";

import './Hero.scss';
import sharan_headshot from '../../assets/images/Sharan_Athiyadath.jpg';

function Hero(){
  return (
    <section className="hero">
      <Slide duration={1000}>
        <div className='hero__imgContainer'>
          <img className='hero__img' src={sharan_headshot} alt="Sharan's headshot" />
        </div>
      </Slide>
      <Slide duration={2000}>
        <h1 className="hero__heading">Sharan Athiyadath</h1>
      </Slide>
      <Slide duration={3000}>
        <h3 className="hero__subheading">Full Stack Developer</h3>
      </Slide>
      <Slide duration={4000}>
        <ul className='hero__sociallinks'>
          <li><a target="_blank" href="https://www.linkedin.com/in/sharan-athiyadath/"><FaLinkedin/></a></li>
          <li><a target="_blank" href="https://github.com/Sharanadhi"><FaGithub/></a></li>
          <li><a target="_blank" href="https://open.spotify.com/user/315qepx426u27kty6kxa5227dxoe?si=c8d4bc9ade6c4824"><FaSpotify/></a></li>
        </ul>
      </Slide>
      <div className="scroll-down">
        <span></span>
        <span></span>
        <span></span>
     </div>
    </section>
  )
}

export default Hero;