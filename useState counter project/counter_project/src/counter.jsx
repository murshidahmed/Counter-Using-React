import React, { useState } from 'react'

function counter() {

    const [count, setCount] = useState (0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }else{
            null
        }

        //setCount(count - 1) this can be used to decrease the value even from 0.
        
    }

    const reset = () =>{
        setCount(0)
    }


  return (
    <>
        <h3>{count}</h3>
        <div className='btn-container'>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>

    </>
  )
}

export default counter