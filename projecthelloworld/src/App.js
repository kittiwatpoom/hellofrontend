import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './index/Component/Navbar';
import Loading from './index/Component/Loading';
import ReactTimeout from 'react-timeout'
import What from './index/Component/What';
import Who from './index/Component/Who';
import Where from './index/Component/Where';
import When from './index/Component/When';
import FAQ from './index/Component/FAQ';
import Contact from './index/Component/Contact';
import Landing from './index/Component/Landing';



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

    this.handleSelect = this.handleSelect.bind(this);

  }




  render() {
    return (


      <div>
        <Loading />
        <div>
          <Navbar />
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div id="Home" class="carousel-item active">
              <Landing />
            </div>
            <div id="What" class="carousel-item">
              <What />
            </div>
            <div id="Who" class="carousel-item">
              <Who />
            </div>
            <div id="Where" class="carousel-item">
              <Where />
            </div>
            <div id="When" class="carousel-item">
              <When />
            </div>
            <div id="FAQ" class="carousel-item">
              <FAQ />
            </div>
            <div id="Contact" class="carousel-item">
              <Contact />
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>





    );
  }
}


