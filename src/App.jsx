import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <iframe style={{height: 500, width: 1000}} src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/f6e692d5-2134-4804-8854-28709cdb69c2/cid-9F7A273B986A512A/index.html" title="Events"></iframe>
      </div>
    </>
  )
}

export default App
