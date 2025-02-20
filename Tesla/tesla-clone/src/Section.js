import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>
          {title}
        </h1>
        <p>
          {description}
        </p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
          {leftBtnText}
        </LeftButton>
        {
          rightBtnText && 
            <RightButton>
              {rightBtnText}
            </RightButton>
        }
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg"/>
      </Fade>
      </Buttons>
      
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height:100vh;
  background-size:cover; 
  background-position:center;
  background-repeat:no-repeat;
  background-image: url("/images/model-s.jpg"); 
  display:flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items:center; //horizontal
  background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
  padding:15vh;
  text-align: center;
/* animation: animateUp 1s; */

`
const ButtonGroup = styled.div`
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  width:256px;
  height:40px;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:100px;
  opacity:0.85;
  text-transform: uppercase;
  font-size:14px;
  cursor:pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  color: black;
  background-color:white;
  opacity:0.7; 
`
const DownArrow = styled.img`
  height:40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`  
const Buttons = styled.div`
/* animation: animateUp 1s;  */
`