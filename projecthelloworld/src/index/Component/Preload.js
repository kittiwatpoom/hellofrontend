import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position:fixed;
    margin:auto;
    left:0;
    top:0;
    width:100%;
    height:100%;
    color:#FFF;
    background-color:#000;  
    z-index:1;
    text-align:center;
    transform:2s;
`

const Preload =() => (
    <Div id="preload" class="preload">
        Hello Corgi!!!!
    </Div>
)




export default Preload