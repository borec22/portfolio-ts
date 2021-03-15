import React from 'react';
import classes from './Work.module.scss';
import {StyleType} from '../Works';
import {Button} from '../../../common/components/Button/Button';

export type PropsType = {
   title: string
   description: string
   style: StyleType
   sourceCodeSrc: string
   viewProjectSrc: string
}

export const Work: React.FC<PropsType> = ({title, description, sourceCodeSrc, viewProjectSrc, style, ...props}) => {
   return (
      <div className={classes.work}>
         <div className={classes.image} style={style}>
            <Button isLink href={viewProjectSrc}>watch the project</Button>
            <Button isLink href={sourceCodeSrc}>view source code</Button>
         </div>
         <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.description}>{description}</span>
         </div>
      </div>
   );
}
