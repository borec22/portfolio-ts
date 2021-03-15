import React, {useState} from 'react';
import classes from './Nav.module.scss';


export const Nav = () => {
   return (
      <div className={classes.nav}>
         <div className={classes.navItem}>
            <a href="#home"
               className={`${classes.navLink}`}>
               Home
            </a>
         </div>
         <div className={classes.navItem}>
            <a href="#skills"
               className={`${classes.navLink}`}>
               Skill
            </a>
         </div>
         <div className={classes.navItem}>
            <a href="#works"
               className={`${classes.navLink}`}>
               Work
            </a>
         </div>
         <div className={classes.navItem}>
            <a href="#contacts"
               className={`${classes.navLink}`}>
               Contact
            </a>
         </div>
      </div>
   );
}
