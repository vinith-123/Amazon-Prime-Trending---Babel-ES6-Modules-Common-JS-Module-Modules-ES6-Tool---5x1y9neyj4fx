import React, {useState, useEffect} from "react";
import '../styles/App.css';

const App = (props) => {
  const [slideCount, setSlideCount] = useState(0);
  const [prevRefState, setPrevRefState] = useState(true);
  const [nextState, setNextState] = useState(false);
  const {title, text} = props.slides[slideCount];

  
  function btnHandler(event){
    if(event.target.innerText === "Prev"){
      if(slideCount > 0){
        setSlideCount(slideCount-1);
      }
    }
    if(event.target.innerText === "Restart"){
      if(slideCount > 0){
        setSlideCount(0);
      }
    }
    if(event.target.innerText === "Next"){
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
        <h1 data-testid="title" style={{textAlign : "center"}}>{title}</h1>
        <p data-testid="text" style={{textAlign : "center"}}>{text}</p>
      </section>
      <section>
        <button data-testid="button-prev" disabled={prevRefState} onClick={btnHandler}>Prev</button>
        <button data-testid="button-restart" disabled={prevRefState} onClick={btnHandler}>Restart</button>
        <button data-testid="button-next" disabled={nextState} onClick={btnHandler}>Next</button>
      </section>
    </div>
  )
}


export default App;
