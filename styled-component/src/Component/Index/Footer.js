import React from 'react'
import styled from 'styled-components'


const Bg = styled.div`
    background-color:  #3366ff ;
    padding:4px;
    margin:2px;
`

const Foooter = styled.h2`
    font-family:Itim;
    color:white;
`

const Footer =()=>(
    <Bg>

        <Foooter>This is footer</Foooter>
    </Bg>
       
)

export default Footer