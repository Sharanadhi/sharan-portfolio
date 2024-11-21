
import { FaLinkedin,FaGithub,FaSpotify,FaXTwitter,FaSquareYoutube } from "react-icons/fa6";
import { Slide,Fade,Zoom } from "react-awesome-reveal";

import './Hero.scss';
import sharan_headshot from '../../assets/images/Sharan_Athiyadath.jpg';

function Hero(){
  return (
    <section className="hero">
      <Zoom duration={2000}>
        <div className='hero__imgContainer'>
          <img className='hero__img' src={sharan_headshot} alt="Sharan's headshot" />
        </div>
      </Zoom>
      <Slide duration={2000}>
        <h1 className="hero__heading">Sharan Athiyadath</h1>
      </Slide>
      <Slide duration={3000}>
        <h3 className="hero__subheading">Full Stack Developer</h3>
      </Slide>
        <ul className='hero__sociallinks'>
        <Fade delay={2000} cascade damping={0.1}>
          <li><a target="_blank" href="https://www.linkedin.com/in/sharan-athiyadath/"><FaLinkedin/></a></li>
          <li><a target="_blank" href="https://github.com/Sharanadhi"><FaGithub/></a></li>
          <li><a target="_blank" href="https://open.spotify.com/user/315qepx426u27kty6kxa5227dxoe?si=c8d4bc9ade6c4824"><FaSpotify/></a></li>
          <li><a target="_blank" href="https://x.com/sharanadhi1"><FaXTwitter/></a></li>
          <li><a target="_blank" href="https://youtube.com/@sharanadhi9196?si=zEaPk4dXBYvBKjHx"><FaSquareYoutube/></a></li>
      </Fade>
        </ul>
    </section>
  )
}

export default Hero;