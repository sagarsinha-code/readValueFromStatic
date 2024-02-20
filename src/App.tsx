import { useState } from 'react'
import './App.css'
import { Example } from './data'

function App() {

  const [target, setTarget] = useState<keyof typeof Example>('value1'); //represents the union of all keys of the Example object.

  const handleClick = (value: any) => {
    setTarget(value);
  }

  return (
    <>
      {
        Object.keys(Example).map((data) => {
          return <button onClick={()=> handleClick(`${data}`)}>{data}</button>
        })
      }
      <div>
        {Example[target].title}
      </div>
    </>
  )
}

export default App
