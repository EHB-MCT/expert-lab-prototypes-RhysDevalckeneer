import React from 'react'
import Container from '../Layout/Container'

import nepflix from "../../assets/images/nepflix.png"
import movieTime from "../../assets/images/movietime.png"
import parkin from "../../assets/images/parkin.png"

function Projects() {
  return (
    <Container>
        {/* movietime - parkin website - */}
        <div className='flex align-center content-center justify-between mb-9'>
            <h2 className='text-3xl font-bold text-gray-700'>Projects</h2>
            {/* <Link to="/projects" className='underline mt-6'>See more</Link> */}
        </div>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-2 mb-16">
            <a href="https://ehb-mct.github.io/web2-frontend-RhysDevalckeneer/" rel="noreferrer" className='box row-start-1 row-end-2 col-start-1 col-end-3 bg-blue-200'>
                <div className=""> 
                    <img src={movieTime} alt="project"/>
                </div>
            </a>
            <a href="https://github.com/RhysDevalckeneer/mern-stack-template" target="_blank" rel="noreferrer" className='box row-start-1 row-end-2'>
                <div className="flex align-center justify-center content-center h-full">
                    <img src={nepflix} alt="project"/>
                </div>
            </a>
            <a href="https://github.com/RhysDevalckeneer/Parkin" target="_blank" rel="noreferrer" className='box row-start-1 row-end-2'>
                <div className="flex align-center justify-center content-center h-full bg-[#050505]">
                    <img src={parkin} alt="project"/>
                </div>
            </a>
        </div>
    </Container>
  )
}

export default Projects