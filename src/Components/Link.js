import React from 'react'
import './Link.css'

export const Link = (props) => {
    return (
        <div className='link'>
            <a href={props.link}>{props.link}</a>
        </div>
    )
}