import React, { useState } from 'react'
useState

function Counter() {
    const[number,setNumber]=useState(0)

    function countIncrement(){
      setNumber(number+1)
    }
    function countDecrement(){
      setNumber(number-1)
    }
    function countReset(){
      setNumber(0)
    }
  return (
    <div>
        <div className="App container my-5 w-45">
            <h1 id='d'>COUNTER APP</h1>
             <h1 id='n1'>{number}</h1>
              <br />
              <button className='btn btn-outline-success m-4' onClick={countIncrement} type='button'>Increment</button>
              <button className='btn btn-danger m-4' onClick={countReset}>Reset</button>
              <button className='btn btn-outline-success m-4' onClick={countDecrement} type='button'>Decrement</button>
          

     
    </div>
        
    </div>
  )
}

export default Counter