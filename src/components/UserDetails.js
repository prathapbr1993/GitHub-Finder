import React from 'react'
import {Card,Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UserDetails = (props) => {
const { user } = props;
const {avatar_url, login } = user



return (
<>
<Row>
<Col sm={4} md={4}>
<Card  className="text-center my-4 p-4 rounded" style={{ width: '16rem' }}>
<Card.Img variant="top" src={avatar_url}  style={{borderRadius:'350px'}}/>
<Card.Body >
<Card.Title> {login}</Card.Title>
<Button variant="primary">
<Link style={{textDecoration:'none'}}  to = {`user/${login}`}  > More </Link> 
</Button>
</Card.Body>
</Card>
<br/>
</Col>
</Row>
</>

    )
}

export default UserDetails
