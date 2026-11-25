import { useEffect, useState,useRef } from 'react'
import formatTime from '../utils/formatTime.js'

function FocusTimer({handleSaveSession}) {
  console.log('render: FocusTimer')
const [text,setText]=useState("")
const [isStart,setIsStart]=useState(false)
const [timer,setTimer]=useState(0)
const inputRef = useRef("null");
const distractionsRef=useRef(0)
function handleChange(e)
{
  setText(e.target.value)
}
function handleStartButton(){
setIsStart(prev => !prev)
}
function handleClickDistracted()
{
  distractionsRef.current+=1
}
function handleSave()
{
    const recordedDistractions = distractionsRef.current;
handleSaveSession({
      id: Date.now(),
      topic: text,
      seconds: timer,
      distractions: recordedDistractions,
    })
    setText("")
    setTimer(0)
    setIsStart(false)
    inputRef.current?.focus();
    distractionsRef.current=0
}
useEffect(()=>{
  if(!isStart) return;
  const intervalId=setInterval(() => {
  setTimer(prev=> prev+1)
}, 1000)
return ()=> {
  clearInterval(intervalId)
}
},[isStart])
  return (
    <section className="panel">
      <label htmlFor="topic">What are you studying?</label>
      <input
        id="topic"
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="e.g. React hooks"
      />

      <p className="now">Now studying: {text}</p>
      <p className="clock">{formatTime(timer)}</p>

      <div className="buttons">
        <button onClick={handleStartButton}>{isStart ? 'Pause' : 'Start'}</button>
        <button onClick={handleClickDistracted}>Got distracted</button>
        <button disabled={text === ''} onClick={handleSave}>
          Save session
        </button>
      </div>
    </section>
  )
}

export default FocusTimer
