import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (props.good + (props.bad*-1))/all
    const positive = (props.good)/all *100
    if(all===0){
        return (
            <p>No feedbacks given</p>
        )
    }
    return (
        <div>
            
                <ul><li><Statistic text="good" value={props.good} /></li></ul>
                <ul><li><Statistic text="netural" value={props.neutral} /></li></ul>
                <ul><li><Statistic text="bad" value={props.bad} /></li></ul>
                <ul><li><Statistic text="all" value={all} /></li></ul>
                <ul><li><Statistic text="average" value={average} /></li></ul>
                <ul><li><Statistic text="positive" value={positive} /></li></ul>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h1>Please give your valuable feedback, By Cicking the Buttons </h1>
            <div>
                <Button event={()=> setGood(good+1)} text="Good" />
                <Button event={()=> setNeutral(neutral+1)} text="Neutral" />
                <Button event={()=> setBad(bad+1)} text="Bad" />
                                
            </div>
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}



export default App