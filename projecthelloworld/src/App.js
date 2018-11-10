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


const Slidee = styled.body`
:slide{
  position: absolute;
    left: 0;
    top: 0;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    overflow:hidden;
}

:slide.current{
  pointer-events: all;
}
`
const blockIndicator = styled.div`
opacity:1;
pointer-events:all;
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

      this.handleSelect = this.handleSelect.bind(this);
      
    }
    

  

  render() {
    return (






      
      <div>
        <Loading />
      <div id="Corgi" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" onSelect={this.handleSelect}>
          <div className="carousel-item active" >
            <Landing />
          </div>
          <div className="carousel-item" onClick={this.handleClick}>
            <What />
          </div>
          <div className="carousel-item" onClick={this.handleClick}>
            <Who />
          </div>
          <div className="carousel-item" onClick={this.handleClick}>
            <Where />
          </div>
          <div className="carousel-item" onClick={this.handleClick}>
            <When />
          </div>
          <div className="carousel-item" onClick={this.handleClick}>
            <FAQ />
          </div>
          <div className="carousel-item" onClick={this.handleClick}>
            <Contact />
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
      <div>
        <Navbar />
        
      </div>
      </div>
</div>



      
      );
    }
  }


