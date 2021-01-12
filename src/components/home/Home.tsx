import React from 'react';
import classes from './Home.module.css';

export const Home = () => {
    return (
        <div className={classes.homeBlock}>
            <div className={classes.container}>
                <div className={classes.greeting}>
                    <span>Hi there</span>
                    <h1>I am Serhii Romanchuk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={classes.mainPhoto}>

                </div>
            </div>
        </div>
    );
}
