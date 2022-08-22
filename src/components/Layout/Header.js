import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartbutton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartbutton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delecious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
