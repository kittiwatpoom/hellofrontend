import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
    font-family:Itim;
`
const P = styled.p`
    font-family:Itim;
`

const ContentTeam = (props)=>(
    <div>
        <Heading>{props.name}</Heading>
        <P>#HelloWorld #Beaver #HelloBeaver #Hello{props.name}</P>
    </div>
)
export default ContentTeam