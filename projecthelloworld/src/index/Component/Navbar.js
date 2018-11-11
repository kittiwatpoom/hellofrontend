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
const Menu = styled.div`
right: -5PX;
position:fixed;
z-index:1;
`


const Navbar = () => (
    <Menu id="mySidenav" class="sidenav-current">
        <Nav className="list-group-item" href="#Home" id="Home" data-target="#carouselExampleControls" data-slide-to="0">Home</Nav>
        <Nav1 className="list-group-item" href="#What" id="#What" data-target="#carouselExampleControls" data-slide-to="1">What</Nav1>
        <Nav2 className="list-group-item" href="#Who" id="#Who" data-target="#carouselExampleControls" data-slide-to="2">Who</Nav2>
        <Nav3 className="list-group-item" href="#Where" id="#Where" data-target="#carouselExampleControls" data-slide-to="3">Where</Nav3>
        <Nav4 className="list-group-item" href="#When" id="#When" data-target="#carouselExampleControls" data-slide-to="4">When</Nav4>
        <Nav5 className="list-group-item" href="#FAQ" id="#FAQ" data-target="#carouselExampleControls" data-slide-to="5">FAQ</Nav5>
        <Nav6 className="list-group-item" href="#Contact" id="#Contact" data-target="#carouselExampleControls" data-slide-to="6">Contact</Nav6>
    </Menu>



)



export default Navbar