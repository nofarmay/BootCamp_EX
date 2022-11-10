import React, {useEffect, useRef} from 'react'
import  ayablack from './ayablack.jpeg'
import  ayacolor from './ayacolor.jpeg'
import  nblack from './nblack.jpeg'
import  ncolor from './ncolor.jpeg'
import "./App.css" 

function App(props) {
const ref1 = useRef()
const ref2 = useRef()

useEffect(() => {
  ref1.current.addEventListener("mouseover", (e) => {
    ref1.current.src = ayacolor;
  });
  ref1.current.addEventListener("mouseout", (e) => {
    ref1.current.src = ayablack;
  });
  ref2.current.addEventListener("mouseover", (e) => {
    ref2.current.src = ncolor ;
  });
  ref2.current.addEventListener("mouseout", (e) => {
    ref2.current.src = nblack;
  });
} );

return (
  <div>
    <img ref={ref1} src={ayablack}></img>
    <img ref={ref2} src={nblack}></img>
  
  </div>
)
}

export default App