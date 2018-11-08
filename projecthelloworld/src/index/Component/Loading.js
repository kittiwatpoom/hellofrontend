import React from 'react';
import styled, { keyframes} from 'styled-components'
import {compose, withState, lifecycle} from 'recompose'

const FadeBG = keyframes`
70%{
  opacity:1;
}
100%{
  opacity:0;
}
`
const SwapIcon = keyframes`
0%{
  opacity:1;
}
25%{
  opacity:1;
}
50%{
  opacity:0;
}
75%{
  opacity:0;
}
100%{
  opacity:1;
}
`
const LoadText = keyframes`
0%{
  font-size:1em;
}
50%{
  font-size:1.1em;
}
100%{
  font-size:1em;
}      
`
const LoadTextDestop = keyframes`
0%{
  font-size:2em;
}
50%{
  font-size:2.2em;
100%{
  font-size:2em;
} 
`
const Bg = styled.section`
  height:100%;
  width:100%;
  background: #46afe2;
  z-index: 99999;
  position: fixed;
  display: block;
  transition: all 2s ease-in-out;
  &.hide {
    opacity: 0;
    visibility: hidden;
  }
`

const IMGG = styled.img`
  width:30%;
  position: absolute;
  @media (max-width:720px) {
    width: 60%;
  }
`

const H1 = styled.h1`
  margin-top:30%;
  color:#fff;
  animation: ${LoadTextDestop} 2s linear infinite;
  font-size: 2em;
  z-index:2;
  @media (max-width:720px) {
    margin-top:60%;
    padding-top : 10vw;
    animation: ${LoadText} 2s linear infinite;
  
  }
`

const index = ({show ,delay }) => (
  <Bg className={`d-flex justify-content-center align-items-center ${ !show ? 'hide' : ''}`}>
    <IMGG src="image/corgi9.gif" className="d-flex "/>
    <H1>Loading...</H1>
  </Bg>
)

export default compose(
  withState('show', 'setShow', true),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.setShow(false)
      }, 2000);
    }
  })
)(index)