import React, {useState, useEffect} from 'react'

function Practice() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {setCount(count + 2)}}>increment</button>
    </div>
  )
}

export default Practice