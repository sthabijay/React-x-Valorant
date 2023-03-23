import { useState } from 'react';
import './App.css';
import Data from './data.json';

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
      <div className="screen">
        
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
        
        {
          Data.map( data => {
            return(
            <img src={data.agentImage} alt="" className={`agent-img ${index===data.index? "active" : ""}`}  draggable="false"></img>
          )})
        }        
      </div>
    </div>
  );
}

export default App;
