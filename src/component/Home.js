import React from 'react';


import Search from './search'
import Films from './Films'

import 'bootstrap/dist/css/bootstrap.min.css';
import Modale from './Modal'
function Home() {
  return (
    <div className="App">
      
      <Search/>
      <Films/>
      <Modale />
    </div>
  );
}


export default Home