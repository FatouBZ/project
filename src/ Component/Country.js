import React, {useEffect, useState} from 'react'
import classes from './Country.module.css'
import { Link } from 'react-router-dom';


function Country() {
    const[countries, setCountries] = useState([])
    
    useEffect(() =>{
        const fetchCountry = async () =>{
            try{
            const res = await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json();
            setCountries(data);
            console.log(data[0])
            } catch(error){
                console.error(error)
            }  
        }
        fetchCountry()
    }, [])

    const handleSelect = event => {
        setCountries((event.target.value));
        console.log('value is:', event.target.value);
    }
    

    // const [color, setColor] = useState(" hsl(0, 0%, 98%)")
    // const ColorChange = color =>{
    //     setColor(color)
    // }
    // useEffect(()=>{
    //     document.body.style.backgroundColor = color;
    // }, [color])


  return (
    <div  className={classes.mainContainer}>
      
      <div className={classes.search}>
        <div className={classes.searchBox}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input  type='text' placeholder='Search for a country...'/>
        </div>
        <div className={classes.dropDown}>
            <select name='select' className={classes.select}>
                <option className={classes.selectItem} onChange={handleSelect} value="Filter by Region">Filter by Region</option>
                <option className={classes.selectItem} onChange={handleSelect} value="Africa">Africa</option>
                <option className={classes.selectItem} value="Asia">Asia</option>
                <option className={classes.selectItem} value="Europe">Europe</option>
                <option className={classes.selectItem} value="Oceania">Oceania</option>
            </select>
        </div>
      </div>
 
      <div className={classes.grid}>
        
        {countries.map((country) => { 
            const { flags, population, name, region,capital} = country
           return <div key={country.name.common} >
            <div className={classes.Countries}>

                <img src={flags.png} alt={country.name.common}/>
                <div className={classes.CountryDetails}>
               <Link to={`/${country.name.common}`}>
                {country.name.common}
               </Link>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
                
                </div>
                </div>
            </div>
})}
        
      </div>
    
    </div>
  )
}

export default Country
