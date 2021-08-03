import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Image, ListGroup, Row, Badge } from 'react-bootstrap'
import RepoList from './RepoList'

const UserItems = (props) => {


useEffect(() =>{
    props.getDetails(props.match.params.anything)
    props.getRepos(props.match.params.anything)
},
// eslint-disable-next-line 
[])


    return (
        <>
        <Container>

        <Row>
       <Col md={6}>

        <ListGroup>
        <ListGroup.Item>
       <Link className='btn btn-light my-3' to ='/' >Back to Search </Link>
         <strong> ---Hireable: </strong>{props.user.hireable ? (
            <i className="fa fa-check" aria-hidden="true"></i>
            ):(
                <i className='fa fa-times-circle text-danger' />
            )
        }
          </ListGroup.Item>

          <ListGroup.Item>


       <Image src={props.user.avatar_url} style={{width:'250px'}} />
       </ListGroup.Item>
       <ListGroup.Item>
               
        <a href={props.user.html_url} className='btn btn-dark my-1'>Visit GitHub Profile</a>

           
        </ListGroup.Item>

  


       </ListGroup>
       </Col>

       <Col md={6}>

           <ListGroup variant='flusj'>
               <ListGroup.Item>
               <h1>{props.user.name}</h1>
               <h6> Location : {props.user.location}</h6>

               </ListGroup.Item>
               <ListGroup.Item>
               {props.user.bio && (
                   <>
                <h3> Bio  </h3>
                <h6>{props.user.bio}</h6>

                    </>
                )}
           
               </ListGroup.Item>


               
               <ListGroup.Item>

               {props.user.bio && (
            
                            <strong>Company : {props.user.bio}</strong>

            
                        )}
            
               </ListGroup.Item>

                              
               <ListGroup.Item>

               {props.user.blog && (
           
                            <strong>Website : {props.user.blog}</strong>

                        )}

            
               </ListGroup.Item>

               <ListGroup.Item>

               {props.user.login && (
      
                        <strong>UserName : {props.user.login}</strong>
         
                    )}
               </ListGroup.Item>
        
           <Col md={12}>
           <ListGroup.Item >
           <Badge pill  style={{backgroundColor:'red', padding:'10px', margin:'8px'}}>
               Followers : {props.user.followers}
               
               </Badge> 
               <Badge pill  style={{backgroundColor:'red', padding:'10px', margin:'8px'}}>
               Following : {props.user.following}
               
               </Badge>
               <Badge pill  style={{backgroundColor:'red', padding:'10px', margin:'8px'}}>
               Public Repos  : {props.user.public_repos}
               
               </Badge>

               <Badge pill  style={{backgroundColor:'red', padding:'10px', margin:'8px'}}>
               Public Gists : {props.user.public_gists}
               
               </Badge>


  </ListGroup.Item>
           </Col>

           </ListGroup>
           </Col>
           </Row>


           <Row>
               <Col md={12}>
                   <ListGroup>
                   <ListGroup.Item>
                       
                   < h3 style={{textAlign:'center'}}> Last Five GitHub Repositories </h3>

             <RepoList repos={props.repos}/>
             </ListGroup.Item>
             </ListGroup>
             
             </Col>
              
             </Row>
                    
        </Container>    
        </>
    )
}

export default UserItems
