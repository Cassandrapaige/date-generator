import React, {useState, useEffect} from 'react';
import border from './images/border.png'
import './App.scss';

import {ALL_DATES, INDOOR_DATES, OUTDOOR_DATES} from './data/dates.data'

import ListContainer from './components/list-container/list-container.component'
import CutomButton from './components/custom-button/custom-button.component';

const App = () => {
  const [num, setNum] = useState(0);
  const [data, setData] = useState(ALL_DATES);
  const [isLoading, setIsLoading] = useState(false);

  const randomNumber = Math.floor(Math.random() * data.length);
  
  useEffect(() => {loadData()},[data])

  const loadData = () => {
      setIsLoading(true)
      setNum(randomNumber)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
  }

  const changeView = type => setData(type);

  const handleClick = () => loadData()

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
            <CutomButton
              handleClick = {() => changeView(INDOOR_DATES)}
              text = "Indoors"
              isActive = {data === INDOOR_DATES}
            />
            <CutomButton
              handleClick = {() => changeView(OUTDOOR_DATES)}
              text = "Outdoors"
              isActive = {data === OUTDOOR_DATES}
            />
            <CutomButton
              handleClick = {() => changeView(ALL_DATES)}
              text = "Together"
              isActive = {data === ALL_DATES}
            />
        </div>

      </ListContainer>
    </div>
  );
}

export default App;
