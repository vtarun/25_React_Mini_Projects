import { useState } from 'react';
import './App.css';

import Accordian from './components/accordian';
import StarRating from './components/star-rating';
import Carousel from './components/carousel';
import QRCodeGenerator from './components/qr-code-generator';
import ToggleTheme from './components/toggle-theme';
// import ScrollTopAndBottom from './components/scroll-to-top-bottom';
import ScrollTopAndBottom from './components/scroll-to-top-bottom/scroll-to-section';
import Quiz from './components/quiz';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian />
      <StarRating />
      <Carousel />
      <QRCodeGenerator />
      <ToggleTheme /> */}
      {/* <ScrollTopAndBottom /> */}
      {/* <ScrollTopAndBottom /> */}
      <Quiz />
    </>
  )
}

export default App
