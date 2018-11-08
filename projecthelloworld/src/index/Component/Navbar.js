import React from "react";
import styled from 'styled-components'

const Nav = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    font-size: 20px;
    border-radius:  5px 0 0 5px ;
    text-align:center;
    text-decoration: none;
    color: white ;
    &:hover{
        color: white ;
        right:0;
    }
    top: 60px;
    background-color: #4CAF50;
    z-index:1;
`
const Nav1 = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 5px 0 0 5px;
    text-align:center;
    &:hover{
        color: white ;
        right:0;
    }
    top: 140px;
    background-color: #2196F3;
    z-index:1;
`
const Nav2 = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 5px 0 0 5px;
    text-align:center;
    &:hover{
        color: white ;
        right:0;
    }
    top: 220px;
    background-color: #f44336;
    z-index:1;
`
const Nav3 = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 5px 0 0 5px;
    text-align:center;
    &:hover{
        color: white ;
        right:0;
    }
    top: 300px;
    background-color: #555;
    z-index:1;
`
const Nav4 = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 5px 0 0 5px;
    text-align:center;
    &:hover{
        color: white ;
        right:0;
    }
    top: 380px;
    background-color: #ff4d94;
    z-index:1;
`
const Nav5 = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 5px 0 0 5px;
    text-align:center;
    &:hover{
        color: white ;
        right:0;
    }
    top: 460px;
    background-color: #a64dff;
    z-index:1;
`
const Nav6 = styled.a`
    position: absolute;
    right: -90px;
    transition: 0.3s;
    padding: 15px;
    width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 5px 0 0 5px;
    text-align:center;
    &:hover{
        color: white ;
        right:0;
    }
    top: 540px;
    background-color: #ffb84d;
    z-index:1;
`



const Navbar = () => (
    <div id="mySidenav" class="sidenav">
        <Nav href="#" id="home">Home</Nav>
        <Nav1 href="#" id="what">What</Nav1>
        <Nav2 href="#" id="who">Who</Nav2>
        <Nav3 href="#" id="where">Where</Nav3>
        <Nav4 href="#" id="when">When</Nav4>
        <Nav5 href="#" id="faq">FAQ</Nav5>
        <Nav6 href="#" id="contact">Contact</Nav6>
    </div>























    // <div class="Fluid-container bg-warning">

    //     <div class="row">
    //     <div class="col">
    //         <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-warning">
    //             <a class="navbar-brand" href="#">Navbar</a>
    //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //         </nav>

    //     </div>

    //         <div class="container">
    //         <div class="col-9">
    //             <ul class="nav justify-content-center">
    //                 <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-warning">
    //                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //                         <div class="navbar-nav">
    //                             <a class="nav-item nav-link mr-5" href="#">What</a>
    //                             <a class="nav-item nav-link mr-5" href="#">Who</a>
    //                             <a class="nav-item nav-link mr-5" href="#">Where</a>
    //                             <a class="nav-item nav-link mr-5" href="#">When</a>
    //                             <a class="nav-item nav-link mr-5" href="#">FAQ</a>
    //                             <a class="nav-item nav-link mr-5" href="#">Contact</a>

    //                         </div>
    //                     </div>

    //                 </nav>
    //             </ul>

    //         </div>
    //         </div>

    //     </div>

    // </div >

)



export default Navbar