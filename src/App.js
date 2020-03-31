import React, {useState, useEffect} from 'react';
import border from './images/border.png'
import './App.css';

import {ALL_DATES, INDOOR_DATES, OUTDOOR_DATES} from './data/dates.data'

import ListContainer from './components/list-container/list-container.component'

const App = () => {
  const [num, setNum] = useState(0)
  const [data, setData] = useState(ALL_DATES)
  const [isLoading, setIsLoading] = useState(false)

  const randomNumber = Math.floor(Math.random() * Math.floor(data.length - 1));
  
  const loadData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setNum(randomNumber)
      setIsLoading(false)
    }, 2000)
  }

  const changeView = type => {
    setData(type)
  }

  useEffect(() => {loadData()},[data])

  const handleClick = () => loadData();

   return (
    <div className='App'>
      <img src={border} alt='list border'/>
        <ListContainer 
          dates = {data} 
          num = {num} 
          isLoading = {isLoading} 
          handleClick = {handleClick}
        />

        <div className='buttons'>
          <button onClick = {() => {changeView(INDOOR_DATES)}}>Indoors</button>
          <button onClick = {() => {changeView(OUTDOOR_DATES)}}>Outdoors</button>
          <button onClick = {() => {changeView(ALL_DATES)}}>All</button>
        </div>
    </div>
  );
}

export default App;
