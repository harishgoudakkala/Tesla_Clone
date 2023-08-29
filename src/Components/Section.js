import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImg = {props.backgroundImg}>
      <Fade bottom>
        <Itemtext>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Itemtext>
      </Fade>
      <Fade bottom>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {props.left}
          </LeftButton>
          {props.right &&
            <RightButton> 
            {props.right}
            </RightButton>
          }
          
        </ButtonGroup>
        <DownArrow src="/down-arrow.svg"/>
      </Buttons>
      </Fade>
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/${props.bgImg}")`};
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;

`

const Itemtext = styled.div`
  text-align:center;
  padding-top : 15vh;
`

const ButtonGroup = styled.div`
  display:flex;
  margin-bottom : 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.button`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  border : 0;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color:black;
`
const DownArrow = styled.img`
  height :40px;
  animation: Down infinite 1.3s;
  
`
const Buttons = styled.div`
display:flex;
flex-direction:column;
`
