import React from 'react'
import "./About.css"
import myPic2 from "../assets/images/My_Image2.jpg"

const About = () => {
    return (
        <div className='aboutOuterDiv'>
            <h1 className='heading'>&nbsp; About &nbsp; <hr /></h1>
            <div className='aboutDiv'>
                <div className='aboutLeft'>
                    <img src={myPic2} alt="myPic"></img>
                </div>
                <div className='aboutRight'>
                    <div className='about-innerText'>
                        <h2>SHORT BIOGRAPHY <hr id='heading-h2' /></h2>
                        <div className='about-desc'>
                            <p className='about-h4'>Born in 1995. Raised in Bhilai(C.G.).</p>
                            <p className='para'>
                                I'm <span className='highlight-text'>Yash Chandrakar</span>, a creative web developer from Bhilai.
                                Currently learning Full Stack from Newton School,
                                creating and designing various front-end and back-end projects.
                            </p>
                            <p className='para'>Proficient in <span className='highlight-text'>HTML/CSS/JavaScript, ReactJS, NodeJS, and ExpressJS</span>. Also knowledgeable in <span className='highlight-text'>Data Structures and Algorithms</span>.</p>
                            <p className='para'>
                                I enjoy a good cup of Coffee, watching good movies and TV shows. Playing competitive video games , Basketball etc.
                            </p>
                            <p className='last-para'>
                                "Nothing can be accomplished without rules or standards. " <br />
                                "Always Create"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
