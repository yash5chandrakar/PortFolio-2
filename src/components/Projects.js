import React from 'react'
import ProjectItem from './ProjectItem'
import "./projects.css"

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: "Backend Database Editor",
            stack: "React",
            link: "https://github.com/yash5chandrakar/Backend-Project-ECOM-",
            image: "https://camo.githubusercontent.com/05173ee5c0140cf2c74d16f4bb515dc81a9ae8140e8993c233373cf02a676334/68747470733a2f2f692e696d6775722e636f6d2f35586d77385a412e706e67"

        },
        {
            id: 2,
            name: "Binge Manual",
            stack: "React",
            link: "https://dashing-seahorse-d8c84b.netlify.app/",
            image: "https://i.imgur.com/BLJ9k7X.png"
        },
        {
            id: 3,
            name: "Happy Posts",
            stack: "React",
            link: "https://bespoke-lolly-b88aa3.netlify.app/",
            image: "https://i.imgur.com/uoFkCbD.png"
        },
        {
            id: 4,
            name: "Spin-The-Wheel",
            stack: "React",
            link: "https://classy-hamster-17049b.netlify.app/",
            image: "https://i.imgur.com/mWGd7uY.png"
        },
        {
            id: 5,
            name: "Rock-Paper-Scissors",
            stack: "JS",
            link: "https://yash5chandrakar.github.io/Various-Cool-Minor-Projects/rockpaperscissors.html",
            image: "https://i.imgur.com/qnXwo5S.png"
        },
        {
            id: 6,
            name: "Dog Gallery",
            stack: "JS",
            link: "https://yash5chandrakar.github.io/Various-Cool-Minor-Projects/doggallery.html",
            image: "https://i.imgur.com/CQeLoHE.png"
        },
        {
            id: 7,
            name: "Cat Facts",
            stack: "JS",
            link: "https://yash5chandrakar.github.io/Various-Cool-Minor-Projects/catfacts.html",
            image: "https://i.imgur.com/8sz7kKn.png"
        },
        {
            id: 8,
            name: "Tic-Tac-Toe",
            stack: "React",
            link: "https://spontaneous-cendol-c69aab.netlify.app/",
            image: "https://i.imgur.com/ZK3npL1.png"
        },
        {
            id: 9,
            name: "Stopwatch",
            stack: "JS",
            link: "https://yash5chandrakar.github.io/Various-Cool-Minor-Projects/stopwatch.html",
            image: "https://i.imgur.com/rawbeBR.png"
        },
        {
            id: 10,
            name: "University Website",
            stack: "JS",
            link: "https://yash5chandrakar.github.io/Various-Cool-Minor-Projects/univ.html",
            image: "https://i.imgur.com/Z5TEaqA.png"
        },
        {
            id: 11,
            name: "Todo-Grid",
            stack: "React",
            link: "https://sparkling-fenglisu-0431f1.netlify.app/",
            image: "https://i.imgur.com/WEORFzT.png"
        },
        {
            id: 12,
            name: "Feynmans Board",
            stack: "React",
            link: "https://verdant-cactus-8d0563.netlify.app/",
            image: "https://i.imgur.com/VBabs4R.png"
        },
    ]


    return (
        <div className='projectsOuterDiv'>
            <h1 className='heading'>&nbsp; Projects &nbsp; <hr /></h1>
            <div className='projectsDiv'>
                {projects.map((item) => {
                    return <ProjectItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default Projects
