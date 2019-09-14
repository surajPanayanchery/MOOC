import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const exercises = [
        { part: 'Fundamentals of React', exercise: 10 },
        { part: 'Using props to pass data', exercise: 7 },
        { part: 'State of a component', exercise: 14 }
    ]


    return (
        <div>
            <Header course={course} />
            <Content exercises={exercises} />
            <Footer count={exercises[0].exercise + exercises[1].exercise + exercises[2].exercise} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Footer = (props) => {
    return (
        <div>
            <p>Number of exercises {props.count}</p>
        </div>
    )
}


const Content = (props) => {
    return (
        <div>
            <Part part={props.exercises[0].part} exercise={props.exercises[0].exercise} />
            <Part part={props.exercises[1].part} exercise={props.exercises[1].exercise} />
            <Part part={props.exercises[2].part} exercise={props.exercises[2].exercise} />
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
