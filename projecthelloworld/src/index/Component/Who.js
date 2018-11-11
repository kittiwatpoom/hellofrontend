import React from 'react';
import styled from 'styled-components';

const Whoo = styled.img`
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

const Who = () => (
    <div>

        <Whoo src="image/Whoo.png" />
        <Dog src="image/dog111.png" />
    </div>

)




export default Who