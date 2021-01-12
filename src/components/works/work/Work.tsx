import React from 'react';
import classes from './Work.module.css';

export type PropsType = {
   title: string
   description: string
}

export const Work: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.work}>
            <div className={classes.body}>
               <a href="#">Watch</a>
            </div>
            <h3>{props.title}</h3>
            <span className={classes.description}>{props.description}</span>
        </div>
    );
}
