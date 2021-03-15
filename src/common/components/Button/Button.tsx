import React from 'react';
import classes from './Button.module.scss';

export type PropsType = {
   isLink?: boolean
   href?: string
};

export const Button: React.FC<PropsType> = (props) => {
   const {isLink, href} = props;

   return (
      <>
         {isLink ?
            <a href={href} target='_blank' role='button' className={classes.btn}>{props.children}</a> :
            <button type='submit' className={classes.btn}>{props.children}</button>
         }
      </>
   );
}