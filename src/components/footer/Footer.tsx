import React from 'react';
import classes from './Footer.module.css';

export const Footer = () => {
   return (
      <div className={classes.footer}>
         <div className={classes.container}>
            <h3 className={classes.title}>Serhii Romanchuk</h3>
            <div className={classes.socialIcons}>
               <div className={classes.icon}></div>
               <div className={classes.icon}></div>
               <div className={classes.icon}></div>
               <div className={classes.icon}></div>
            </div>
            <p className={classes.copyright}>© 2019 Kiev, All Rights Reserved.</p>
         </div>
      </div>
   );
}
