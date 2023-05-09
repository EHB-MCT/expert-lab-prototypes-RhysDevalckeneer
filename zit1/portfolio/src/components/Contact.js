import React from 'react'
import Container from './Layout/Container'

function Contact() {
  return (
    <div className='p-24'>
        <Container>
            <h6 className='font-semibold text-xl text-gray-300 mb-4'>Send me a message</h6>
            <h1 className='font-bold text-8xl text-gray-700'>
                <a href="mailto:hello@rhys.be" className='underline underline-offset-8 decoration-4'>
                    hello@rhys.be
                </a>
            </h1>
        </Container>
    </div>
  )
}

export default Contact