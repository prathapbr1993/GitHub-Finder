import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Repo = (props) => {
    return (
        <div>
               
        <ListGroup>
        <ListGroup.Item className='btn btn-dark my-1' >
        <a style={{textDecoration:'none'}} href={props.repo.html_url}>{props.repo.name}</a>
        </ListGroup.Item>
        </ListGroup>
        </div>
    )
}

export default Repo
