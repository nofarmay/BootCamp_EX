import React, { useRef} from 'react'

function App(props) {
const src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  const vidRef = useRef();
  const handlePlayVideo = (e) => {
    vidRef.current.play();
  
   }
   const handlePauseVideo = (e) => {
     vidRef.current.pause();}

  return ( 
    <div>
 <video ref={vidRef} controls width="100%" src={src} type="video/mp4"/>
 <button  onClick={handlePlayVideo}>Play</button>
 <button  onClick={handlePauseVideo}>Pause</button>
    </div>
  )
}
export default App