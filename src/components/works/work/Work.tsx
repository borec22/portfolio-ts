import React from 'react';
import classes from './Work.module.scss';
import {StyleType} from '../Works';
import {ButtonLink} from '../../../common/components/ButtonLink/ButtonLink';

export type PropsType = {
   title: string
   description: string
   style: StyleType
}

export const Work: React.FC<PropsType> = ({title, description, style, ...props}) => {
   return (
      <div className={classes.work}>
         <div className={classes.image} style={style}>
            <ButtonLink>Watch</ButtonLink>
         </div>
         <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.description}>{description}</span>
         </div>
      </div>
   );
}
