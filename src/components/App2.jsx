import { useState } from 'react'

const StatLine = (props)=>{
  return(
    <p>{props.text}: {props.value}</p>
  );
};

const Button = ({ name, clickAction }) => {
  // The `name` prop represents the text displayed on the button.
  // The `clickAction` prop is a function to be called when the button is clicked.
  const handleClick = () => {
    // When the button is clicked, call the `clickAction` function and pass the `name`.
    clickAction(name);
  };
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
};
const Stats = ({goodCount, neturalCount, badCount, totalCount, average, positive}) => {
  if(totalCount>0)  {
    return (
      <div>
        <strong>Statistics</strong>
        <StatLine text="Good" value={goodCount}/>
        <StatLine text="Neutral" value={neturalCount}/>
        <StatLine text="Bad" value={badCount}/>
        <StatLine text="All" value={totalCount}/>
        <StatLine text="Average" value={average}/>
        <StatLine text="Positive" value={positive}/>
      </div>
    )
  }  else  {
    return(
      <p>No feedbacks yet</p>
    )
  }
};
const App2 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButtonClick  = (type) => {
    console.log("clicked type is",type);
    if (type === 'good') {  
      console.log("setGood Updating");
      setGood(good + 1)
    } 
    else if (type === 'neutral') {
      console.log("setNeutral Updating");
      setNeutral(neutral + 1)
    } 
    else if (type === 'bad') {  
      console.log("setBad Updating");
      setBad(bad + 1)
    }
  }

  let totalCount = good + neutral + bad;
  let average = ((good * 1) + (neutral * 0) + (bad * -1)) / totalCount;
  let positive = good / totalCount * 100;
  
  return (
  <table>
    <thead>
        <tr>
          <td>Give Feedback</td>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>
              <Button clickAction={handleButtonClick } name="good"/>
          </td>
          <td>
              <Button clickAction={handleButtonClick } name="neutral"/>
          </td>
          <td>
              <Button clickAction={handleButtonClick } name="bad"/>
          </td>
        </tr>
        <tr>
          <td>
              <Stats 
                goodCount={good} 
                neturalCount={neutral} 
                badCount={bad} 
                totalCount={totalCount}
                average={average}
                positive={positive}
                />
          </td>
        </tr>
    </tbody>
  </table>
  );
};
export default App2