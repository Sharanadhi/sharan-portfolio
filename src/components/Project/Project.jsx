import { Fade, Roll } from "react-awesome-reveal";

import './Project.scss'

function Project({data}){
  return (
    <section className="project">
      <div className='project__imgContainer'>
        <Roll>
        <img className='project__img' src={data.img} alt={data.title} />
        </Roll>
      </div>
      <div className='project__details'>
       <Fade delay={1000}>
       {!data.url && <h2 className='project__title'>{data.title}</h2>}
       {data.url && <h2 className='project__title'><a href={data.url} target="_blank" className="project__link">{data.title}</a></h2>}
         <p className='project__text'>{data.description}</p>
       </Fade>
      </div>
    </section>
  )
}

export default Project;