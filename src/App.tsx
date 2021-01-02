import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Note: imports from src/tailwindcss-classnames, not the actual npm package. See compilerOptions.baseUrl in tsconfig.json
import Navbar from './components/Navbar'
import Landing from './routes/Landing'


function App() {
  return (
    <Router>
      <Switch>
        <div className='h-screen'>
          <Navbar />
          <Route exact path='/'>
            <Landing />  
          </Route> 
          </div>
      </Switch>
    </Router>
  )
}

export default App
