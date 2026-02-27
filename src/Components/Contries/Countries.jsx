import React, { use, useState } from "react";
import "./contries.css";
import Country from "../Country/Country";

const Countries = ({ countriesPromised }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Countries visited to be clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = (flags) => {
    console.log("click flags",flags);
    const newVisitedFlags = [...visitedFlags,flags]
    setVisitedFlags(newVisitedFlags)
  };
  const countriesContent = use(countriesPromised);
  const countries = countriesContent.countries;

  // console.log(countries)
  return (
    <div>
      <h3 className="style">Total Countries :{countries.length}</h3>
      <h3>Total country Visited :{visitedCountries.length}</h3>
      <h3>Total flags :{visitedFlags.length}</h3>
      <div>
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </div>
      <div className="flag-style">
        {
            visitedFlags.map((flags,index)=><img key={index} src={flags}></img>)
        }
      </div>
      <div className="card-body">
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            key={country.ccn3.ccn3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
