import React from 'react'
import {animated,config, useSpring} from 'react-spring'

import './list-item.styles.scss'

const ListItem = ({dates, num, isLoading, handleClick}) => {

    return (
        <div className = 'list-item'>
            {
                isLoading ?
                <div class="center">
                    <div className = 'heart'/>
                </div>
                :
                <>
                <h1>Today my lover and I will</h1>
                <div className = 'result'>
                    <h2>{dates[num].idea}</h2> 
                    <i className="fas fa-redo" onClick = {handleClick}></i>
                </div>
                </>
            }
        </div>  
    )
}

export default ListItem
