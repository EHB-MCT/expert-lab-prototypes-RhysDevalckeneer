import React from 'react'
import Container from './Container'

function Nav() {
  return (
    <nav className='fixed top-0 left-0 w-full py-4'>
        <Container className="flex align-center justify-between">
            <div className='w-full justify-between flex content-center align-center'>
                <p className='font-bold text-xl text-gray-700'>rhys.be</p>
            </div>
        </Container>
    </nav>
  )
}

export default Nav