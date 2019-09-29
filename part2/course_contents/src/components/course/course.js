import React from 'react'
import Header from './header'
import Content from './content'
import Total from './total'


export const Course = ({ course }) => {

    const total = course.parts.reduce((s, p) => {
        return s + p.exercises;
    },0)
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total count={total} />
        </div>
    )


}

export default Course;

