import React from 'react'
import Header from '../components/Layout/Header'
import Contact from '../components/Contact'
import Main from '../components/Layout/Main'

function Homepage() {
  return (
    <div className='bg-gray-50'>
        <Header />
        <Main />
        <Contact />
    </div>
  )
}

export default Homepage