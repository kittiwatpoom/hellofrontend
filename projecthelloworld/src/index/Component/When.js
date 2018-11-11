import React from 'react';
import styled from 'styled-components';

const Whenn = styled.img`
    width: 100%;
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


`
const Dog = styled.img`
    position: absolute;
    width: 230px;
    height: 200px;
    left: 1000px;
    top: 400px;

`

const When = () => (
    <div>

        <Whenn src="image/Whenn.png" />
        <Dog src="image/corgi8.gif" />
    </div>

)




export default When