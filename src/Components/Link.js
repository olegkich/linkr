import React from 'react'

import './css/Link.css'
import Button from 'muicss/lib/react/button';

export const Link = (props) => {
    return (
        <div className='link'>
            <a href={props.link} target="_blank">{props.link}</a>
            <Button className='btn-delete'
            size='small'
            variant='raised'
            color='danger'
            onClick={props.onDelete}>Delete</Button>
        </div>
    )
}