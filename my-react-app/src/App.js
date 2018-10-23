import React, { Component } from 'react';
import logo from './logo.svg';
import TopicSection from './Component/Index/TopicSection';
import './App.css';
import Topic2 from './Component/Index/Topic2';
import Topic3 from './Component/Index/Topic3';
import Topic4 from './Component/Index/Topic4';
import Topic5 from './Component/Index/Topic5';
import Letter from './Component/Index/Letter';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <left><li>logo.png</li>
        <li>Front-End</li>
        <li>Design</li>
        <li>Game</li>
        <li>Infra</li>
        <li>Register</li></left>
      </ul>
        <TopicSection />
        <img src="images/beaverpic.png" style={{width:'15%'}}></img> <button>Front-End</button>
        <img src="images/beaverpic.png" style={{width:'15%'}}></img> <button>Design</button>
        <img src="images/beaverpic.png" style={{width:'15%'}}></img> <button>Game</button>
        <img src="images/beaverpic.png" style={{width:'15%'}}></img> <button>Infra</button>
        <Topic2 />
        <Letter />
        <Topic3 />
        <Letter />
        <Topic4 />
        <Letter />
        <Topic5 />
        <Letter />
        <p>This is footer</p>
      </div>
    );
  }
}

export default App;
