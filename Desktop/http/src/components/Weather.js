import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  // let {data} = props;
  // console.log(data)
  return (
    <li className={classes.movie}>
      <h2>{props.main}</h2>
      <h3>{props.description}</h3>
      <p>{props.icon}</p>
    </li>
  );
};

export default Movie;
