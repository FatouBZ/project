import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import classes from './Country.module.css'
import { Link } from 'react-router-dom';


export function CountryDetailsPage({darkMode}) {
  const [singleCountry, setSingleCountry] = useState([]);
  const {name} = useParams()


  useEffect(() =>{
    const fetchSingleCountry = async() =>{
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const data = await res.json()
        setSingleCountry(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSingleCountry()
  }, [name])

  return(
    <div className={`${classes.singleCountry} ${darkMode ? classes.darkColor : classes.lightColor} `}>
      <div className={`${classes.linkBox} ${darkMode ? classes.darkColor : classes.lightColor}`} >
           <Link to= "/" className={`${classes.backLink} ${darkMode ? classes.darkColor : classes.lightColor}`}> <i className="fa-solid fa-arrow-left"></i>Back</Link>
        </div>
        <div>
          
          {singleCountry.map((item) =>(
            <div key={item.population} className={classes.CountriesDetails}>
            <div className={classes.imageSide}>
                  <img src={item.flags.png} alt={item.name.common}/>
              </div>
              <div className={classes.SingleCountryMain}>
                  <div className={classes.details}>
                  <div className={classes.leftSide}>
                  <h2>{item.name.official}</h2>
                  <h4>Native Name: <span>{item.name.official}</span></h4>
                  <h4>Population: <span>{item.population}</span></h4>
                  <h4>Region: <span>{item.region}</span></h4>
                  <h4>Sub-Region: <span>{item.subregion}</span></h4>
                  <h4>Capital: <span>{item.capital[0]}</span></h4>
                  </div>
                  <div className={classes.rightSide}>
                 
                  <h4>Currency: <span>{item.region}</span></h4>
                  <h4>Sub-Region: <span>{item.subregion}</span></h4>
                  <h4>Languages: <span>{item.languages[0]}</span></h4>
                  </div>
                  </div>
                  
                  <div className={classes.countryBorder}>
                  {item.borders && <div className={classes.border}>
                    <h4>Border Countries: </h4>
                  <ul>
                    {item.borders.map((border, index) =>( 
                      <li key={index} className={darkMode ? classes.darkColor : classes.lightColor }>{border}</li>
                    ))}
                  </ul>
                  </div>}
              </div>
              </div>
          </div>
          ))}
        </div>
    </div>
    
  )
  
}

 
