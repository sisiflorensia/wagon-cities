import React from 'react';

import City from './city';

const CityList = ({ cities }) => {
  return (
    <div className="cities">
      {cities.map((city, index) => {
        return <City city={city} key={city.slug} index={index} selected={city.name === "Paris"} />;
      })}
    </div>
  );
};

export default CityList;
