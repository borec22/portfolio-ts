import React from 'react';
import classes from './Footer.module.scss';
import {ICONS} from '../../common/constans';
import {Icon} from '../../common/components/Icon/Icon';


export const Footer = () => {

   return (
      <div className={classes.footer}>
         <div className={classes.container}>
            <h3 className={classes.title}>Serhii Romanchuk</h3>
            <div className={classes.socialIcons}>
               <a href='https://www.linkedin.com/in/sromanchuk/' target='_blank'>
                  <Icon icon={ICONS.FaLinkedin} size={40}/>
               </a>
               <a href="https://github.com/borec22" target='_blank'>
                  <Icon icon={ICONS.FaGithub} size={40}/>
               </a>
               <a href="mailto:serhioromanchuk@gmail.com" target='_blank'>
                  <Icon icon={ICONS.FaAt} size={40}/>
               </a>
               <a href="tel:380967895778" target='_blank'>
                  <Icon icon={ICONS.FaMobileAlt} size={40}/>
               </a>
            </div>
            <p className={classes.copyright}>© 2021 Kiev, All Rights Reserved.</p>
         </div>
      </div>
   );
}
