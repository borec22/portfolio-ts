import React from 'react';
import classes from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="#">Home</a>
            <a href="#">Skill</a>
            <a href="#">Work</a>
            <a href="#">Contact</a>
        </div>
    );
}
