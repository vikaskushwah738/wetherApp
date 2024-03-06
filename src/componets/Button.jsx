import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button className='btn' onClick={props.onClick}>{props.value}</button>
    </div>
  )
}
