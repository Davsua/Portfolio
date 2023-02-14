import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import JsonData from '../../data.json';
import ProjectItem from './ProjectItem';
import TitleSection from './TitleSection';

import 'swiper/css/effect-fade';

SwiperCore.use(Navigation);

export default function ProjectsHome(props) {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    //console.log(landingPageData);
  }, [landingPageData]);

  //console.log(JsonData.Projects);
  //console.log(`---> ${landingPageData.Projects}`);
  return (
    <section id='projects'>
      <div className='title-projects'>
        <TitleSection title='Projects' subtitle='Some of my projects' />
      </div>
      <div className='projects-container'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            //windos less than 640px
            640: {
              slidesPerView: 1,
            },
            764: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {JsonData.Projects.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectItem
                  img={project.img}
                  title={project.title}
                  description={project.desc}
                  link={project.link}
                />
                ;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
