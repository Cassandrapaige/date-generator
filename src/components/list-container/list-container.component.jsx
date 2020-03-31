import React from 'react'

import './list-container.styles.scss'

import ListItem from '../list-item/list-item.component'

const ListContainer = ({...rest},) => {
    return (
        <div className = 'list-container'>
            <ListItem {...rest} />
        </div>
    )
}

export default ListContainer