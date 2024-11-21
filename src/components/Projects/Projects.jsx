import { Slide} from "react-awesome-reveal";
import projects from '../../assets/data/projects.json'
import Project from '../Project/Project';
import './Projects.scss';

const Projects = () => {
  const renderProjects = projects.map((item) => (
    <Project key={item.id} data={item} />
  ));
  
  return (
    <section id="projects" className='projects'>
      <div className='projects__header'>
          <h2 className="projects__heading">PROJECTS</h2>
          <hr className='underline'/>
        <Slide>
          <p className="projects__text">
          Here you will find some of the personal projects that I had created. 
          </p>
        </Slide>
      </div>
      <div className='projects__container'>
        {renderProjects}
      </div>
    </section>
  )
}

export default Projects;