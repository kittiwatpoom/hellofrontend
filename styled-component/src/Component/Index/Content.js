import React from 'react'
import styled from 'styled-components'


const Span = styled.span`
    display:inline-block;
    // text-align:center;
    margin:10px;
    padding:10px;
`

const Image = styled.img`
    
    height:140px;

`
const Button = styled.button`
  color: #3366ff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #3366ff;
  border-radius: 3px;
  font-family:Itim;
`


const Content = (props)=>(
  <Span>



    <span>

        <div><Image src ='images/beaverpic2.png' /></div>
    </span>
    <span>
        <div><Button>#{props.team}</Button></div>
    </span>
    

  </Span>  
   
        

)
export default Content