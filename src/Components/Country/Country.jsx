import React from 'react';

const Country = ({country}) => {
    console.log(country.name.common)
    return (
        <div>
            <h4>Name:{country.name.common}</h4>
        </div>
    );
};

export default Country;