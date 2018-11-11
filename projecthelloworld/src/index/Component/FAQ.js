import React from 'react';
import styled from 'styled-components';

const FAQQ = styled.img`
    width: 100%;
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


`
const Dog = styled.img`
    position: absolute;
    width: 300px;
    height: 250px;
    left: 1000px;
    top: 370px;

`

const FAQ = () => (
    <div>

        <FAQQ src="image/FAQQ.png" />
        <Dog src="image/corgi7.gif" />

    </div>
)




export default FAQ