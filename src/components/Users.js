import React from 'react'
import UserDetails from './UserDetails'
import {Col, Row } from 'react-bootstrap';


const Users = (props) => {
  
return (
<>
<Row>
    {props.users.map((user) => (
        <Col sm={12} md={6} lg={6} xl={3}>
       <UserDetails  user={user} /> 
       </Col>       
           ))}
</Row>
</>
    )
}

export default Users
