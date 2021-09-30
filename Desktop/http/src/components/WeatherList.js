import React from 'react';

import Weather from './Weather';
import classes from './WeatherList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Weather
          key={movie.id}
          main={movie.main}
          description={movie.description}
          icon={movie.icon}
        />
      ))}
    </ul>
  );
};

export default MovieList;
