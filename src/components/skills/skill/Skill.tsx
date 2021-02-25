import React from 'react';
import classes from './Skill.module.scss';
import {StyleType} from '../../works/Works';

export type PropsType = {
   title: string
   style: StyleType
}

export const Skill: React.FC<PropsType> = ({style, title, ...props}) => {
   /*const IconComponent = getKeyValue<keyof IconsType, IconsType>(icon)(Icons);*/

   return (
      <div className={classes.skill}>
         <div className={classes.icon} style={style}> </div>
         <h3 className={classes.title}>{title}</h3>
      </div>
   );
}
