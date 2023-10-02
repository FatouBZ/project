import React from 'react'
import classes from './Country.module.css'


function Header() {
  return (
    <div>
      <nav className={classes.TopNavBar}>
        <div className={classes.title}>
            <h3>Where in the world?</h3>
        </div>
        <div className={classes.switchMode}>
            <button>
                 <p><i className="fa-regular fa-moon"></i></p>
        <p>Dark Mode</p>
            </button>
       
        </div>
      </nav>
    </div>
  )
}

export default Header
