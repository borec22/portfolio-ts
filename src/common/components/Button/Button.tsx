import React from 'react';
import classes from '../ButtonLink/ButtonLink.module.scss';

export type PropsType = {};

export const Button: React.FC<PropsType> = (props) => {
   return (
      <>
         <button type='submit' className={classes.btn}>{props.children}</button>
      </>
   );
}