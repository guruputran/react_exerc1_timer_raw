import React, { FC, ChangeEvent, useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import styled from 'styled-components';

const StyledDiv = styled.div`
font-family: Roboto-Bold;
font-size: 84px;
color: #37474F;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;

`;
const App: FC = () => {
  
const [times, setTimes] = useState<string>(new Date().toLocaleTimeString())

 useEffect(() => {
 tick()
  },[sI()]);

  function tick(){
    setTimes(String(new Date().toLocaleTimeString()))
  }
 
  function sI(){
   setInterval(() => tick(), 1000);
  }

return <StyledDiv>{times}</StyledDiv>
  }

export default App;
