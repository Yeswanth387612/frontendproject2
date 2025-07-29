import React, { Component } from 'react'
import {Link}from 'react-router-dom';
import './css/page2.css';

export default class page2 extends Component {
  render() {
 

  return (
    <div className='main1'>
     <h1>"Hello World and  India</h1> 
         <Link to="/page1" > Go to Page1 </Link>
       <br/><br/>
       <div className='text1'>
       <h2>WELCOME TO UNIVERSITY</h2>
       <br/><br/>
      <div className='link1'>
        
           <Link to="/Homepage">Go to HomePage  </Link>
         </div>
         </div>
         </div>
         
    
  );
}
  }

