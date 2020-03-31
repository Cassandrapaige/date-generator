import React, {useState, useEffect} from 'react';
import border from './images/border.png'
import './App.scss';

import {ALL_DATES, INDOOR_DATES, OUTDOOR_DATES} from './data/dates.data'

import ListContainer from './components/list-container/list-container.component'

const App = () => {
  const [num, setNum] = useState(0)
  const [data, setData] = useState(ALL_DATES)
  const [isLoading, setIsLoading] = useState(false)

  const randomNumber = Math.floor(Math.random() * data.length - 1);
  
  useEffect(() => {loadData()},[data])

  const loadData = () => {
    try {
      setIsLoading(true)
      setNum(randomNumber)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  const changeView = type => setData(type);

  const handleClick = () => loadData();

   return (
    <div className='App'>
      <img src={border} alt='list border'/>
        <ListContainer 
          dates = {data} 
          num = {num} 
          isLoading = {isLoading} 
          handleClick = {handleClick}
        >

        <div className='buttons'>
            <button onClick = {() => {changeView(INDOOR_DATES)}}>Indoors</button>
            <button onClick = {() => {changeView(OUTDOOR_DATES)}}>Outdoors</button>
            <button className= 'active' onClick = {() => {changeView(ALL_DATES)}}>Together</button>
        </div>

      </ListContainer>
    </div>
  );
}

export default App;
