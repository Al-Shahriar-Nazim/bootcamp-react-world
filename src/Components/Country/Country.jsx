import React, { useState } from "react";
import "./Country.css";
const Country = ({ country,handleVisitedCountries,handleVisitedFlags}) => {
    const [visited,setVisited] = useState(false)
  // console.log(country.name.common)
  // console.log(country.flags.flags)
  // console.log(country.population.population)
//   console.log(country.area.area);
const handleVisited = ()=>{
    // basic way
    if(visited=== true){
        setVisited(false)
    }
    else{
        setVisited(true)
    }
    handleVisitedCountries(country)
}
  return (
    <div className={`country-style ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Name:{country.name.common}</h4>
      <p>Population :{country.population.population}</p>
      <p>
        Area :{country.area.area} ({" "}
        {country.area.area > 30000 ? "Big country" : "Small country"} )
      </p>
      <button onClick={handleVisited} className="btn">{visited ? "visited":"Not visited"}</button>
      <button onClick={()=>handleVisitedFlags(country.flags.flags.png)} className="btn">See visited flags</button>
    </div>
  );
};

export default Country;
