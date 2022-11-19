import React from 'react'

const ProjectItem = (props) => {
    const item = props.item

    return (
        <div className='projectItem' style={{ backgroundImage: `url(${item.image})` }}>
            <a href={item.link} target={"_blank"} rel="noreferrer" ><h3>{item.name}</h3>
                <p>(&nbsp;{item.stack}&nbsp;)</p></a>
        </div>
    )
}

export default ProjectItem
