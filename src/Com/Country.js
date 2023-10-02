import React, {useEffect, useState} from 'react'
import classes from './Country.module.css'
import { Link } from 'react-router-dom';


function Country({darkMode}) {
    const[countries, setCountries] = useState([])
    const [Search, setSearch] = useState("")
    const regions = [
      {
        name: "Africa",
      },
      {
        name: "America",
      },
      
      {
        name: "Asia",
      },
      {
        name: "Europe",
      },
      {
        name: "Oceania",
      },
      
    ]
    useEffect(() =>{
        const fetchCountry = async () =>{
            try{
            const res = await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json();
            setCountries(data);
            
            } catch(error){
                console.error(error)
            }  
        }
        fetchCountry()
    }, [])

    async function searchCountry(){
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${Search}`)
        const data = await res.json()
        setCountries(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    function handleSearch(e) {
      e.preventDefault()
      searchCountry()
    }
    
    async function filterRegion(region){
      try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const data = await res.json()
        setCountries(data)
      } catch (error) {
        
      }
    }
    function handleRegion (e){
      e.preventDefault();
      filterRegion()
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

        <form onSubmit={handleSearch} className={`${classes.searchBox}  ${darkMode ? classes.darkColor : classes.lightColor }`}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className={darkMode ? classes.darkColor : classes.lightColor} value={Search} onChange={(e) => setSearch(e.target.value) }
          type='text' placeholder='Search for a country...' />
        </form>

        <form onSubmit={handleRegion} className={classes.dropDown}>
        <select name="filter-by-region" id="filter-by-region" className={`${classes.selectOption} ${darkMode ? classes.darkColor : classes.lightColor }`}
        value={regions.name}
        onChange={e => filterRegion(e.target.value)}
        >
        {regions.map((region, index) =>(
              <option key={index} value={region.name}>{region.name}</option>
            ))}

            </select>
        </form>
      </div>
     
      <div className={classes.grid}>
        {countries.map((country) => { 
            
            
           return  <div key={country.name.common} >
            <Link to= {`/${country.name.common}`} className={classes.Link}>  
            <div className={`${classes.Countries} ${darkMode ? classes.darkColor : classes.lightColor }`}>

                <img src={country.flags.png} alt={country.name.common}/>
                <div className={classes.CountryDetails}>
                <h3>{country.name.common}</h3>
               
                <h4>Population: <span>{country.population}</span></h4>
                <h4>Region: <span>{country.region}</span></h4>
                <h4>Capital: <span>{country.capital}</span></h4>
                
                </div>
                </div>
                </Link>
            </div>
            
})}
        
      </div>
     
    </div>
    
  )
}

export default Country
