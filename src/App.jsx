// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const name1 = 'Anandu';
  const x = 14;
  const y = 5;
  const style_h2={
    color:'blue',

  }
const color=['red','blue','green']
  return (
    <>

      <h1 style={{color:'red',fontSize:'50px'}}>home</h1>
      <h1 style={style_h2}>{name1}</h1>
      <p className='test'>sum of {x} and {y} is {x + y}</p>
      <ul>
        <li>{color[0]}</li>
        <li>{color[1]}</li>
      </ul>
      <ul>
        {color.map((ele)=>(<li>{ele}</li>))}
      </ul>
    </>
  )
}

export default App
