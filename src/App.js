import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import NavBar from './components/NavBar';
import Search from './components/Search';
import Users from './components/Users';
import UserItems from './components/UserItems';


const App = () => {

const [users, setUsers ] = useState([])
const [user, setUser ] = useState({})
const [repos, setRepos] = useState([])
const [showClear, setShowClear] = useState(false)



  const searchName = async (text) => {
  const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
  setUsers(res.data.items)
  setShowClear(true)
  }


  const clearUser = () => {
  setUsers([])
  }

  const getDetails = async(login) => {
  const res = await axios.get(`https://api.github.com/users/${login}`)
  setUser(res.data)
  }

  const getRepos=async(username) => {
  const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc`)
  setRepos(res.data)
  }




return (
    <Router>     
        <NavBar />
        <div className='container'>
        <Switch>

          <Route exact path='/' render= {
            props => (
              <>
              <Search searchName={searchName} showClear={showClear} clearUser={clearUser}  />
              <Users users={users} />
              </>
            )
          }
          />

          <Route exact path='/user/:anything' render= {
            props => (
          <UserItems getDetails={getDetails} user={user} {...props} getRepos={getRepos} repos={repos}
         
          />        
            )
          }
          />
         </Switch>
  </div>
      </Router>      

  )
}

export default App
