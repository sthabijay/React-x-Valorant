import { useState } from 'react';
import './App.css';
import Data from './data.json';

function decreaseIndex( index )
{
  if (index<=0) {
    return (Data.length-1)
  }
  else return (index-1);
}

function increaseIndex( index )
{
  if (index>=Data.length-1) {
    return (0)
  }
  else return (index+1);
}

const AbilityBoxes = ({ index }) =>
{
   return Data[index].abilities.map ( abilityData =>{
    return(
    <div className='ability-box'>
      <h5>{abilityData.keybind}</h5>
      <img src={abilityData.icon} alt="" className="logos" draggable="false"></img>
    </div>
  )})    
}

function DetailBox({ index }) {
    return(
    <div className="detail-box">

      {/* TITLE */}
      <div className='title'>
        <h6>{Data[index].role.toUpperCase()}</h6>
        <h1>{Data[index].name.toUpperCase()}</h1>
      </div>

      {/* ABILITY-CONTEINER */}
      <div className='ability-container'>
        <AbilityBoxes index={index}/>         
      </div>

      {/* DISCRIPTION-CONTAIONER */}
      <div className='discription'>
        <p className='agent-discription'>{Data[index].agentDiscription}</p> 
        <p className='class-discription'>
        <h2>{Data[index].role.toUpperCase()}</h2>
        {Data[index].classDiscription}</p>
      </div>

    </div>
)}

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <div className="screen" style={{
        backgroundColor: `${Data[index].background}`
      }}>

        {
          Data.map( data => {
            return(
            <img src={data.agentImage} alt="" className={`agent-img ${index===data.index? "active" : ""}`}  draggable="false"></img>
          )})
        }
        
        <DetailBox index={index}/>

        <div className='agent-button-container'>
        {
          Data.map( data => {
            return(
            <button className={`agent-button ${index===data.index? "selected" :""}`} onClick={()=>{
              setIndex(data.index)
            }}>
            <img src={data.agentIcon} alt="" className='agent-icon' draggable="false"></img></button> 
            )})
          }
        </div>
        
        <div class="index-wrap">
          <button class="index-button" onClick={()=>{
            setIndex(decreaseIndex)
          }}>&lt;</button>
          <span class="index"> {index+1} / {Data.length} </span>
          <button class="index-button" onClick={()=>{
            setIndex(increaseIndex)
          }}>&gt;</button>
        </div>

      </div>
    </div>
  );
}

export default App;
