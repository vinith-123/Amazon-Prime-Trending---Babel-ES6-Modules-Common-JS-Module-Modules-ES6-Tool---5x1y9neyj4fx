import React, {useState, useEffect} from "react";
import '../styles/App.css';

const App = (props) => {
  const [slideCount, setSlideCount] = useState(0);
  const [prevRefState, setPrevRefState] = useState(false);
  const [nextState, setNextState] = useState(false);

  
  function btnHandler(event){
    if(event.target.innerText === "← Prev"){
      if(slideCount > 0){
        setSlideCount(slideCount-1);
      }
    }
    if(event.target.innerText === "↻ Refresh"){
      if(slideCount > 0){
        setSlideCount(0);
      }
    }
    if(event.target.innerText === "Next →"){
      if(slideCount < props.slides.length){
        setSlideCount(slideCount+1);
      }
    }
  }

  useEffect(()=>{
    slideCount === 0 ? setPrevRefState(true) : setPrevRefState(false);
    slideCount === 4 ? setNextState(true) : setNextState(false);
  });

  return (
    <div className="container" style={{textAlign : "center"}}>
      <section style={{border : "2px solid black", margin : "20px"}}>
        <h1 data-testid="title" style={{textAlign : "center"}}>{props.slides[slideCount].title}</h1>
        <p data-testid="text" style={{textAlign : "center"}}>{props.slides[slideCount].text}</p>
      </section>
      <section>
        <button data-testid="button-prev" disabled={prevRefState} onClick={btnHandler}>← Prev</button>
        <button data-testid="button-restart" disabled={prevRefState} onClick={btnHandler}>↻ Refresh</button>
        <button data-testid="button-next" disabled={nextState} onClick={btnHandler}>Next →</button>
      </section>
    </div>
  )
}


export default App;
