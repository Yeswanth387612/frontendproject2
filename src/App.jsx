import { useState } from 'react'
import './App.css'
import {Link}from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to front end class in KLU</h1>
    <h2>
      Today's topic is introdction to react
    </h2>
    <h3>
      Today date is 29-07-2025
    </h3>
    <h4>
      2400030250-Yeswanth Kumar
    </h4>
    <h5>
      Yeswanth Kumar
    </h5>
  
<div >
  <Link to="/page1">Go to Page1</Link>
<br/><br/>
  <Link to="/page2" >Go to Page2 </Link>
  <br/><br/>
  <Link to="/page3" >Go to Page3 </Link>
</div>
    </>
  )
}

export default App
