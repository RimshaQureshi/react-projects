import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navigation from './components/navigation.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            <Navigation/>
            <Hero/>
    </div>
  )
}

export default App
