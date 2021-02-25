import React from 'react';
import {Title} from '../../common/components/Title/Title';
import classes from './Works.module.scss';
import {Work} from './work/Work';
import imageSocialNetwork from '../../assets/images/map.jpg';
import imageTodolist from '../../assets/images/wiki.png';
import imageSocial from '../../assets/images/tic-tac-toe.png';

export type StyleType = {
   backgroundImage: string
}

type WorkType = {
   id: number
   title: string
   description: string
   style: StyleType
}

const works: WorkType[] = [
   {
      id: 1,
      title: 'Social Network',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!',
      style: {
         backgroundImage: `url(${imageSocialNetwork})`,
      }
   },
   {
      id: 2,
      title: 'Todolist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!',
      style: {
         backgroundImage: `url(${imageTodolist})`,
      }
   },
   {
      id: 3,
      title: 'Tic Tac Toe Game',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!',
      style: {
         backgroundImage: `url(${imageSocial})`,
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
                                        description={work.description}/>)}
            </div>
         </div>
      </div>
   );
}
