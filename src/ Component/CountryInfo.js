import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './Country.module.css';

function CountryInfo() {
  const [country, setCountry] = useState({});
  const { population } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${population}`);
        const data = await res.json();
        setCountry(data[0]); // Assuming the API returns an array with a single country object
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [population]);

  return (
    <div>
      <Link to="/" className={classes.backLink}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </Link>

      <div>
        <div className={classes.Countries}>
          <h1>{country.population}</h1>
          {/* You can access other properties of the 'country' object here */}
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
