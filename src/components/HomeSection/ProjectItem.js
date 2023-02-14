import React from 'react';
//import { Link } from "react-router-dom";
//import MoviesDb from '../../images/MoviesDb.png';

export default function ProjectItem({
  title = 'Project',
  description = 'Desc',
  link = 'https://github.com/Davsua',
  img,
}) {
  return (
    <div id='projectItem'>
      <a href='/projects' className='projectItem-img'>
        <img src={img} alt='project-img'></img>
      </a>
      <div className='projectItem-info'>
        <a href={link} target='blank'>
          <h3 className='projectItem-title'>{title}</h3>
        </a>
        <p className='projectItem-desc'>{description}</p>
      </div>
    </div>
  );
}
