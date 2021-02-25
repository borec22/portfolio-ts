import React from 'react';
import classes from './Title.module.scss';

type PropsType = {
   value: string
   description: string
}

export const Title: React.FC<PropsType> = ({value, description, ...props}) => {
   return (
      <div className={classes.title}>
         <p className={classes.description}>{description}</p>
         <h2>{value}</h2>
      </div>
   );
}