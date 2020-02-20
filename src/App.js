import React from 'react';
import './App.css';
// import Description from './Movie/Description'
import Description from './component/Description'
import Home from './component/Home'

import {Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
            <Route  exact path='/' component={Home}/>
            <Route exact path='/:id' component={Description}/>
    </div>
  )
}