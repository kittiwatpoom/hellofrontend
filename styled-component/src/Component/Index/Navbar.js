import React from 'react'
import styled from 'styled-components'

const ColorSpan = styled.span`
    background-color : #3366ff ;
`

const Colorul = styled.ul`
    text-align:center;
    list-style-type: none;
    background-color : #3366ff ;
    margin:0;
    padding:0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const List = styled.li`
    display:inline-block;
`
const Type = styled.a`
    display: block;
    color: black;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-family:Itim;
`
const Type1 = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 18px;
    :hover{
        background-color : #0039e6 ;
    }
    font-size: 20px;
    font-family:Itim;
`
const List1 = styled.li`

    float:right;
`

const List2 = styled.li`

    float:left;
`

const Navbar= ()=>(
<ColorSpan>
    <Colorul>
        <List2><Type>Logo.png</Type></List2>

        <List><Type1>Front-End</Type1></List>
        <List><Type1>Design</Type1></List>
        <List><Type1>Game</Type1></List>
        <List><Type1>Infra</Type1></List>

        <List1><Type>Register</Type></List1>  
    </Colorul>
</ColorSpan>

)
export default Navbar
