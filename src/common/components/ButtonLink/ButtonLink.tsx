import classes from './ButtonLink.module.scss';
import React from 'react';

export type PropsType = {};

export const ButtonLink: React.FC<PropsType> = (props) => {
   return (
      <>
         <a href='#' role='button' className={classes.btn}>{props.children}</a>
      </>
   );
}

