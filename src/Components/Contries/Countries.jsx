import React, { use } from 'react';
import "./contries.css"
import Country from '../Country/Country';

const Countries = ({countriesPromised}) => {
    const countriesContent = use(countriesPromised);
    const countries = countriesContent.countries;

    // console.log(countries)
    return (
        <div>
            <h3 className='style'>Total Countries :</h3>
            <div>
                {
                    countries.map(country=><Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;