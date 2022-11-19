import React from 'react'
import "./home.css"
import myPic from "../assets/images/My_Image.jpg"
import Doc from '../assets/resume/resume.pdf'

const Home = () => {
    return (
        <div className='homeDiv'>
            <h1 className='heading'> &nbsp; Home &nbsp; <hr /></h1>
            <div className='homeInner'>
                <div className='homeLeft'>
                    <h2>Hello Visitor, My Name is </h2>
                    <h2 className='homeName'>
                        <span>Y</span>
                        <span>a</span>
                        <span>s</span>
                        <span>h</span>&nbsp;
                        <span>C</span>
                        <span>h</span>
                        <span>a</span>
                        <span>n</span>
                        <span>d</span>
                        <span>r</span>
                        <span>a</span>
                        <span>k</span>
                        <span>a</span>
                        <span>r</span>
                    </h2>
                    <h2 className='techStacks'>Welcome to my Portfolio</h2>
                    <h2>I am a Passionate & Enthusiastic Developer</h2>
                    <h2 className='techStacks'>ReactJS || NodeJS || ExpressJS</h2>
                    <div>
                        <a className='homeLinks' href='#about'>Lets Get Started</a>
                        <a className='homeLinks' href={Doc} download={'Yash_Resume'} target={'_blank'} rel="noreferrer">Download Resume</a>
                    </div>
                </div>
                <div className='homeRight'>
                    <img src={myPic} alt="MY PIC"></img>
                </div>
            </div>
        </div>
    )
}

export default Home
