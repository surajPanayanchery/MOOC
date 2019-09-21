import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <div>
                <h2>give feedback</h2>
                <br></br>
                <Button onClick={() => setGood(good + 1)} text="good" />
                <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
                <Button onClick={() => setBad(bad + 1)} text="bad" />

            </div>
            <div>
                <h2>statistics</h2>
                <br></br>
                {good + neutral + bad === 0 && <div>No Feedback given</div>}
                {good + neutral + bad > 0 &&
                    <span>
                        <div><Statistics text="good" value={good} /></div>
                        <div><Statistics text="neutral" value={neutral} /></div>
                        <div><Statistics text="bad" value={bad} /></div>
                        <div><Statistics text="all" value={good + neutral + bad} /></div>
                        <div><Statistics text="average" value={((good * 1) + (bad * -1)) / (good + neutral + bad)} /></div>
                        <div><Statistics text="positive" value={(good / (good + neutral + bad)) * 100} /> %</div>
                    </span>
                }
            </div>
        </div>
    )
}

const Statistics = ({ text, value }) => {
    return (
        <span>{text} {value}</span>
    )
}

const Button = ({ onClick, text }) => {
    return (
        <span>
            <button onClick={onClick}>
                {text}
            </button>
        </span>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)