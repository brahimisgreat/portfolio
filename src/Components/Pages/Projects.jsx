import React from 'react'
import {data} from '../../data'
import ProjectCard from '../../Components/Features/ProjectCard'


export default function Projects () {
  return (
    <div className='Projects'>
      {data.map((item, index) => (
       <ProjectCard key={index} images={item.image} skills={item.skills}  name={item.name}/>
      ))}
      
        
    
    </div>
  )
}
