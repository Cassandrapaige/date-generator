import React, {Fragment} from 'react'

import './list-item.styles.scss'

import Loader from '../loader/loader.component'

const ListItem = ({dates, num, isLoading, handleClick, children}) => {

    return (
        <div className = 'list-item'>
            {
                isLoading ?
                <Loader />
                :
                <Fragment>
                    <h1>Today my lover and I will be...</h1>
                       {children}
                    <h1>and we will be...</h1>
                    <div className = 'result'>
                        <h2>{dates[num].idea}</h2> 
                        <i className="fas fa-redo" onClick = {handleClick}></i>
                    </div>
                </Fragment>
            }
        </div>  
    ) 
}

export default ListItem
