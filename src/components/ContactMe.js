import React from 'react'
import "./ContactMe.css"
import github from "../assets/images/github.png"
import Leetcode from "../assets/images/leetcode.png"
import LinkedIn from "../assets/images/linkedIn.png"

const ContactMe = () => {

    const contactLinks = [
        {
            id: 1,
            name: "LinkedIn",
            link: "https://linkedin.com/in/yash-chandrakar",
            image: github
        },
        {
            id: 2,
            name: "Github",
            link: "https://github.com/yash5chandrakar",
            image: Leetcode
        },
        {
            id: 3,
            name: "Leetcode",
            link: "https://leetcode.com/yash5chandrakar/",
            image: LinkedIn
        }
    ]


    return (
        <div className='contactOuterDiv'>
            <h1 className='outerHeading'>&nbsp; Contact Me &nbsp; <hr /></h1>
            <div className='contactInnerDiv'>
                <div className='contactLeft'>
                    <p>Hello there, my name is <span>Yash Kumar Chandrakar .</span></p>
                    <p>Currently, i am looking for a job as a Full Stack Dev / React Dev .</p>
                    <p>You can reach me at <span><a href="mailto:yash5chandrakar@gmail.com">yash5chandrakar@gmail</a></span>  .</p>
                    <p>Contact No. <span>+91 9009377042</span> .</p>
                </div>
                <div className='contactRight'>
                    {contactLinks.map((item) => {
                        return <div key={item.id} className='contactItem'>
                            <a href={item.link} target={'_blank'} rel="noreferrer">
                                <img src={item.image} alt="Contact_Item"></img>
                                <p>{item.name}</p>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContactMe
