import React, { Component } from 'react'
import {Link}from 'react-router-dom';
export default class page1 extends Component {
  render() {
    return (
      <div>

        <h1> India is my country</h1>
        <Link
    to="/page2"
    style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}
  >
    Go to Page2 
  </Link>
  <br/><br/>
  
  <div className='link2'>
      <Link
    to="/Homepage"
    style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}
  >
    Go to HomePage
  </Link>
  </div>
      </div>
    )
  }
}
