
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Header from "./Com/header";
import Error from './Com/Error'
import Country from "./Com/Country";
import { CountryDetailsPage } from "./Com/CountryDetailsPage";
import React, {useState} from 'react'
import classes from './Com/Country.module.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const switchMode = ()=>{
    setDarkMode(prevState => !prevState)
  }
  return (
    <div className= {`{App} ${darkMode ? classes.darkColor : classes.lightColor }`}>
      <BrowserRouter>
      <Header onClick={switchMode}  darkMode={darkMode}/>
        <Routes>
        <Route path="/" element={
        <Country  darkMode={darkMode}/>} />
        <Route path="/:name" element={<CountryDetailsPage  darkMode={darkMode}/>}></Route>
        <Route path="*" element ={<Error/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
