import React from 'react';
import styled from 'styled-components';

const Contactt = styled.img`
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

const Contact = () => (
    <div>

        <Contactt src="image/Contactt.png" />
        <Dog src="image/corgi6.gif" class="img-responsive"/>

    </div>
)





export default Contact