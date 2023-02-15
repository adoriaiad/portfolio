import React from 'react'
import home from './../assets/img/homepage.png';

function Home() {
  return (
      <header className="App-header" style={{display: 'flex', alignItems: 'center'}}>
        <img src={home} alt="logo" width={'90%'} height={'90%'}/>
      </header>
   
  )
}

export default Home