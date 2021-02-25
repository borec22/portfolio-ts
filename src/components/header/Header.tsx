import React from 'react';
import classes from './Header.module.scss';
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={classes.headerBlock}>
            <Nav/>
        </div>
    );
}

// <canvas class="background" width="1058" height="895" style="width: 100%; height: 100%;"></canvas>