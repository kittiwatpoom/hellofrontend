import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './index/Component/Navbar';
import Preload from './index/Component/Preload';


const CorgiImg = styled.img`
  width:auto;

`

class App extends Component {
  render() {
    return (


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




      //  <div className="Fluid-container bg-warning">
      //      <h1 className="text-center">Hello World</h1>
      //   <div className="card text-white bg-dark">
      //      <h1>Beaver</h1>
      //     <div className="row card-footer">
      //         <div className="col-12 col-lg-3">
      //             <Navbar btn="btn btn-primary" name="Frontend"/>
      //         </div>
      //         <div className="col-12 col-lg-3">
      //             <Navbar btn="btn btn-outline-danger" name="Design"/>
      //         </div>
      //         <div className="col-12 col-lg-3">
      //             <Navbar btn="btn btn-warning" name="Game"/>
      //         </div>
      //         <div className="col-12 col-lg-3">
      //             <Navbar btn="btn btn-outline-success" name="Infra"/>
      //         </div>
      //     </div>
      //   </div>
      //  </div>

    );
  }
}

export default App;
