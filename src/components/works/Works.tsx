import React from 'react';
import {Title} from '../../common/components/Title/Title';
import classes from './Works.module.scss';
import {Work} from './work/Work';
import imageSocialNetwork from '../../assets/images/map.jpg';
import imageTodolists from '../../assets/images/todolists.png';
import imageSocial from '../../assets/images/tic-tac-toe.png';
import imageCounter from '../../assets/images/counter.png';

export type StyleType = {
   backgroundImage: string
}

type WorkType = {
   id: number
   title: string
   description: string
   sourceCodeSrc: string
   viewProjectSrc: string
   style: StyleType
}

const works: WorkType[] = [
   {
      id: 1,
      title: 'Social Network',
      description: 'React, Redux, TypeScript, React Final Form, Redux-Thunk, React Hooks / Class Components, Axios, Browser-Router',
      sourceCodeSrc: 'https://github.com/borec22/social-network-ts',
      viewProjectSrc: '',
      style: {
         backgroundImage: `url(${imageSocialNetwork})`,
      }
   },
   {
      id: 2,
      title: 'Todolists',
      description: 'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, Axios, Browser-Router, StoryBook, Unit Tests',
      sourceCodeSrc: 'https://github.com/borec22/TODOLIST',
      viewProjectSrc: 'https://borec22.github.io/TODOLIST',
      style: {
         backgroundImage: `url(${imageTodolists})`,
      }
   },
   {
      id: 3,
      title: 'Counter',
      description: 'React, Redux, TypeScript, Local Storage',
      sourceCodeSrc: 'https://github.com/borec22/counter',
      viewProjectSrc: 'https://borec22.github.io/counter/',
      style: {
         backgroundImage: `url(${imageCounter})`,
      }
   }
];

export const Works = () => {
   return (
      <div id='works' className={classes.worksBlock}>
         <div className={classes.container}>
            <Title value='My Works' description='Showcasing some of my best work'/>
            <div className={classes.works}>
               {works.map(work => <Work key={work.id}
                                        style={work.style}
                                        title={work.title}
                                        viewProjectSrc={work.viewProjectSrc}
                                        sourceCodeSrc={work.sourceCodeSrc}
                                        description={work.description}/>)}
            </div>
         </div>
      </div>
   );
}
