import React from 'react'
import Part from './part'

const Content = (props) => {

    const getParts = () => props.parts.map(part => { return (<Part key={part.id} part={part.name} exercise={part.exercises} />) }
    )

    return (
        <div>
            {getParts()}
        </div>
    )
}

export default Content;