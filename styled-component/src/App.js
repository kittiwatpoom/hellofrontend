import React, { Component } from 'react'
// import TopicSection from './Component/Index/TopicSection'
import Navbar from './Component/Index/Navbar';
import Footer from './Component/Index/Footer';
// import ContentTeam from './Component/Index/ContentTeam';
import Content from './Component/Index/Content';
import ContentTeam from './Component/Index/ContentTeam';
import styled from 'styled-components'
import './App.css';


const Box = styled.section`
  background-color:#99b3ff;
`

const Size = styled.h1`
  font-size : 30px;
  font-family:Itim;
`

class App extends Component {
  render() {
    return (
<Box>

      <div className="App">
      

        <div>
          <Navbar />
        </div>
        <center><Size>Hello World</Size></center>
        <span>

        <Content team="Front-End" color='#99b3ff'/>
        <Content team="Design" color='#99b3ff'/>
        <Content team="Game" color='#99b3ff'/>
        <Content team="Infra" color='#99b3ff'/>

        <ContentTeam name="Front-End" />
        <ContentTeam name="Design" />
        <ContentTeam name="Game" />
        <ContentTeam name="Infra" />
        
        <div><Footer /></div>
        </span>

      

        </div>  
        
</Box>
    )
  }
}

export default App