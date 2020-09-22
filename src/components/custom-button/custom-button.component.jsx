import React from 'react'

const CutomButton = ({handleClick, text, isActive}) => (
    <button className = {`${isActive && 'active'}`} onClick = {handleClick}>{text}</button>
)

export default CutomButton;