import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian';
import StarRating from './components/star-rating';
import Carousel from './components/carousel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordian />
      <StarRating />
      <Carousel />
    </>
  )
}

export default App
