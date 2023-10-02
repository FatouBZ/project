import React, { useState } from 'react';
import classes from './Country.module.css'


function Header({onClick, darkMode}) {
  return (
    
      <div className={`${classes.TopNavBar} ${darkMode ? classes.darkColor : classes.lightColor }`}>
        <div className={classes.title}>
            <h2>Where in the world?</h2>
        </div>
        <button className={`${classes.switchMode} ${darkMode ? classes.darkColor : classes.lightColor}`} onClick={onClick} >
           <p>{darkMode ? <i className="fa-solid fa-moon"  ></i> :<i className="fa-regular fa-moon"></i> }</p>
        <p>Dark Mode</p>
            
       
        </button>
      </div>
   
  )
}

export default Header
