import React from 'react'

import Container from '../components/Layout/Container'
import Project from '../components/Projects/Project'

function Projects() {
  return (
    <main>
        <Container>
            <div className='flex align-center content-center justify-between mb-9'>
              <h2 className='text-6xl font-bold text-gray-700'>All Projects</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </Container>
    </main>
  )
}

export default Projects