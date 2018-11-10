import React from 'react';
import styled from 'styled-components';


const Clound = styled.img`
position: absolute;
width: 90%;

left: 71px;
top: 56px;
z-index:1;
`
const Clound2 = styled.img`
position: absolute;
width: 20%;
left: 685px;
top: 160px;
z-index:3;
`



const Landingg = styled.img`
width:100%;

`



const Landing =() => (
   
    
    <div >
    <Landingg src="image/CorgiAndFrame.png"/>
    <Clound src="image/clound.png"/>
    {/* <Clound2 src="image/clound2.png"/> */}
    
   </div>

        
       

)




export default Landing