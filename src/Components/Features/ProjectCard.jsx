import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

export default function ProjectCard ({images, skills, name, gitrepo, website})  {
  return (
    <div>
        <img src={images} alt='image of projects' />
        <h1>{name}</h1>
        <p>{skills}</p>
        <div>
            <Link>{website}</Link>
            <Link>{gitrepo}</Link>
        </div>
    
    </div>
  )
}
