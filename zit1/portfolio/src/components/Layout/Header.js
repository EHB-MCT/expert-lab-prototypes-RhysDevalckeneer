import React from 'react'
import githubLogo from '../../assets/images/github.svg';

function Header({ children }) {
  return (
        <header className='flex flex-col justify-center content-center align-center bg-slate-800 mb-16'>
          <h1 className='text-6xl font-bold mb-4 text-gray-100 text-center'>
            <span className='text-blue-400'>{'>'}&nbsp;</span>Hi, I'm Rhys Devalckeneer</h1>
          <h3 className='text-3xl font-bold text-blue-100 text-center'>& I'm a full stack developer</h3>
          <div className='flex flex-row justify-center content-center align-center mt-4'>
             <a href="https://github.com/RhysDevalckeneer" rel="noreferrer" className='text-white'>
                <div className="w-8 text-white"> 
                    <img src={githubLogo} alt="project"/>
                </div>
            </a>
            <a href="https://github.com/RhysDevalckeneer2" rel="noreferrer" className='text-white ml-4'>
                <div className="w-8 text-white"> 
                    <img src={githubLogo} alt="project"/>
                </div>
            </a>
          </div>
        </header>
  )
}

export default Header