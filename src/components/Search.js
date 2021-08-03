import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


const Search = (props) => {
const[text,setText] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    props.searchName(text)
    setText('')
  
}
 
    return (
        <>
        
        <Form onSubmit={handleSubmit}  >
        <Form.Control size="lg"   type='text' name='text' placeholder='Search here' 
            value={text} onChange={(e) => setText(e.target.value)} />
            <br/>
            <Form.Control size="lg"  type='Submit' value='Search'   />
        </Form>
        <br/>

            {props.showClear && (
                <div className="d-grid gap-2">
                 <Button size="lg"  type='submit' value='Search' onClick={props.clearUser} >Clear</Button>
                 <br/>

              </div>
            )}
            
        </>
    )
}

export default Search

  