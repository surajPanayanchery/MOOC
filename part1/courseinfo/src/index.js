import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            },
        ]
    }


    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total count={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )
}
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.count}</p>
        </div>
    )
}


const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p> {props.part} {props.exercise}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
