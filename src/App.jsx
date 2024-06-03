import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hexa from './components/HexaColor'
import Block from './components/Number'
import Bars from './components/Bar'
import Increment from './components/Increment'
import Country from './components/Country'
import LoadingCountry from './components/LoadingCountry'
import ColorPicker from './components/ColorPicker'
import UpdateObject from './components/UpdateObject'
import UpdateArray from './components/UpdateArray'
import ToDo from './components/ToDo'
import Form from './components/FormValidation'
import Clock from './components/DigitalClock'
import ApiUser from './components/ApiUser'
import Times from './components/Times'
import Previous from './components/Previous'
import StopWatch from './components/StopWatch'

function App() {

  return (
    <div className="App">
      <Hexa />
      <Block />
      <Bars />
      <Increment />
      <Country />
      <LoadingCountry />
      <ColorPicker />
      <UpdateObject />
      <UpdateArray />
      <ToDo />
      <Form />
      <Clock />
      <ApiUser />
      <Times />
      <Previous />
      <StopWatch />
    </div>
  )
}

export default App
