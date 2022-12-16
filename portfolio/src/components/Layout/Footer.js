import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className='py-4'>
        <Container>
            <div className='grid grid-cols-2 gap-4'>
                <div className=''>
                    <p className='text-xs text-gray-400 font-extralight'>
                        &copy; 2022 Rhys Devalckeneer. All right reserved.
                    </p>
                </div>
                <div className='flex justify-end'>
                    <a href="#" className='text-xs text-gray-400 font-extralight'>
                        Terms of Service • 
                    </a>
                    &nbsp;
                    <a href="#" className='text-xs text-gray-400 font-extralight'>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer