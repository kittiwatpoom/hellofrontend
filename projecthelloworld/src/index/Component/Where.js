import React from 'react';
import styled from 'styled-components';

const Wheree = styled.img`
    width: 100%;
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


`
const Dog = styled.img`
    position: absolute;
    width: 350px;
    height: 270px;
    left: 950px;
    top: 350px;

`

const Where = () => (
    <div>

        <Wheree src="image/Wheree.png" />
        <Dog src="image/corgi5.gif" />
    </div>

)



export default Where