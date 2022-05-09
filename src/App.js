
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import DailyNews from './components/DailyNews';

export default class App extends Component {
  render() {
    return (
      <>
      <div className="container">
    <Navbar/>
    <DailyNews pageSize={9}/>
    </div>
    </>
    )
  }
}

