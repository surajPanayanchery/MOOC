import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voteList, setVote] = useState([0, 0, 0, 0, 0, 0]);
    let voteArray = [...voteList];

    const mostVote = () => {
        let max = 0;
        let maxIndex = 0;
        voteArray.some((voteCount, index) => {
            if (voteCount > max) {
                max = voteCount;
                maxIndex = index;
            }
        });
        return maxIndex;
    }
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>{props.anecdotes[selected]}</div>
            <div>has {voteArray[selected]} votes</div>
            <Button onClick={() => { voteArray[selected] += 1; setVote(voteArray); }} text="vote" />
            <Button onClick={() => setSelected(Math.floor(Math.random() * 5) + 1)} text="next anecdote" />
            <h2>Anecdote wth most votes</h2>
            <Statistics value={anecdotes[mostVote()]} />
        </div>
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
const Statistics = ({ value }) => {
    return (
        <div>
            {value}
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)