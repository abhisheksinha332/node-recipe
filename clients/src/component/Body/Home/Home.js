import React from 'react'
import './style.css'
import back from './image/5393830.jpg'
const Home = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${back})`,
            backgroundRepeat: 'no-repeat',
            width:'100vw' ,
            height:'100vh' ,
            position:'fixed',
            marginTop:'-30px',
            marginLeft:'-180px'
          }}>
              <div className="text">
              The Foodie<br/>
              <h4>Have fun with food</h4>
              </div>
              
           
          </div>
    // <s.container back={back}>

    // </s.container>
    )
}

export default Home
