import React, {useEffect, useRef, useState} from 'react';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import classes from './Home.module.scss';
import meImage from '../../assets/images/me2.png';
// @ts-ignore
import * as THREE from 'three';

export const Home = () => {
   const [vantaEffect, setVantaEffect] = useState(0);
   const vantaRef = useRef(null);

   useEffect(() => {
      if (!vantaEffect) {
         setVantaEffect(
            NET({
               el: vantaRef.current,
               THREE,
               color: 0x354d3e,
               backgroundColor: 0x90914,
               maxDistance: 21.00,
            })
         );
      }
      return () => {
         if (vantaEffect) {
            // @ts-ignore
            vantaEffect.destory();
         }
      };
   }, [vantaEffect]);

   return (
      <div id='home' className={classes.homeBlock} ref={vantaRef}>
         <div className={classes.container}>
            <div className={classes.greeting}>
               <span>Hi there</span>
               <h1>I am <span>Serhii</span> <span>Romanchuk</span></h1>
               <p>React Front-end Developer</p>
            </div>
            <div className={classes.borderPhoto}>
               <div className={classes.mainPhoto} style={{backgroundImage: `url(${meImage})`}}>

               </div>
            </div>
         </div>
      </div>
   );
}
