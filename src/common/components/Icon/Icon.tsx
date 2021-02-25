import React from 'react';
import classes from '../../../components/footer/Footer.module.scss';

type PropsType = {
   icon: string
   size: number,
}

export const Icon: React.FC<PropsType> = (props) => {

   const styles = {
      svg: {
         display: 'inline-block',
         verticalAlign: 'middle',
      }
   };

   return (
      <div className={classes.icon}>
         <svg stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.svg}
              width={`${props.size}px`}
              height={`${props.size}px`}
         >
            <path d={props.icon}> </path>
         </svg>
      </div>
   );
}