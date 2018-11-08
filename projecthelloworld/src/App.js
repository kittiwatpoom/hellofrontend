import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './index/Component/Navbar';
import Loading from './index/Component/Loading';
import ReactTimeout from 'react-timeout'



const CorgiImg = styled.img`
  width:auto;

`


  export default class App extends React.Component {
    state = {
      color: {}
    };
    
    setColor = async (theme) => {
      this.setState({
        color: theme
      })
      setTimeout(() => {
        
      }, 2000);
    }
  
  

  render() {
    return (
      
      <div>
        <Loading />
      <div id="Corgi" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#Corgi" data-slide-to="0" class="active"></li>
          <li data-target="#Corgi" data-slide-to="1"></li>
          <li data-target="#Corgi" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CorgiImg class="d-block " src="image/corgi1.jpg" alt="Corgi1" />
          </div>
          <div className="carousel-item">
            <CorgiImg class="d-block " src="image/corgi2.jpg" alt="Corgi2" />
          </div>
          <div className="carousel-item">
            <CorgiImg class="d-block " src="image/corgi3.jpg" alt="Corgi3" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#Corgi" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#Corgi" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="Fluid-container ">
        <Navbar />
      </div>
      </div>
</div>



      
      );
    }
  }


