import React from 'react'
import About from './About'
import ContactMe from './ContactMe'
import Home from './Home'
import Projects from './Projects'
import Resume from '../components/Resume/Resume'

const DisplayItems = () => {
    return (
        <div className='itemsDiv'>
            <div className='displayItem' id='home'>
                <Home />
            </div>
            <div className='displayItem' id='about'>
                <About />
            </div>
            <div className='displayItem'>
                <Resume />
            </div>
            <div className='displayItem' id='projects'>
                <Projects />
            </div>
            <div className='displayItem' id='contactMe'>
                <ContactMe />
            </div>
        </div>
    )
}

export default DisplayItems

// < p > <a href="mailto:someone@example.com">Send emaildskndbkjsbda,jkbdjklaldalkjdlkjandladnldsnal</a></ >
