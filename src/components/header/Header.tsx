import React from 'react';
import classes from './Header.module.css';
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={classes.headerBlock}>
            <Nav/>
        </div>
    );
}