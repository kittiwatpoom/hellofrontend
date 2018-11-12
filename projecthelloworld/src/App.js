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
            <div id="Home" class="carousel-item active" data-interval="200000">
              <Landing />
            </div>
            <div id="What" class="carousel-item" data-interval="200000">
              <What />
            </div>
            <div id="Who" class="carousel-item" data-interval="200000">
              <Who />
            </div>
            <div id="Where" class="carousel-item" data-interval="200000">
              <Where />
            </div>
            <div id="When" class="carousel-item" data-interval="200000">
              <When />
            </div>
            <div id="FAQ" class="carousel-item" data-interval="200000">
              <FAQ />
            </div>
            <div id="Contact" class="carousel-item" data-interval="200000">
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


