import React from 'react';
import styled from 'styled-components';


const Clound = styled.img`
position: absolute;
width: 100%;

left: 71px;
top: 56px;
z-index:1;
`




const Landingg = styled.img`
height:100%;
width: 100%;


  

`



const Landing =() => (
   
    
    <div >
    <Landingg src="image/CorgiAndFrame.png" />
    <Clound src="image/clound.png"/>
    
    
   </div>

        
       

)




export default Landing