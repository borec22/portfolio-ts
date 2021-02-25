import React from 'react';
import classes from './Skills.module.scss';
import {Skill} from './skill/Skill';
import {Title} from '../../common/components/Title/Title';
import {StyleType} from '../works/Works';
import ReactImage from '../../assets/images/react.png';
import ReduxImage from '../../assets/images/redux.png';
import TypeScriptImage from '../../assets/images/ts.png';
import JSImage from '../../assets/images/js.png';
import HTMLImage from '../../assets/images/html5.png';
import CSSImage from '../../assets/images/css3.png';



type SkillType = {
   id: number
   title: string,
   style: StyleType
}

const skills: SkillType[] = [
   {
      id: 1,
      title: 'React',
      style: {
         backgroundImage: `url(${ReactImage})`,
      }
   },
   {
      id: 2,
      title: 'Redux',
      style: {
         backgroundImage: `url(${ReduxImage})`,
      }
   },
   {
      id: 3,
      title: 'TypeScript',
      style: {
         backgroundImage: `url(${TypeScriptImage})`,
      }
   },
   {
      id: 4,
      title: 'JS',
      style: {
         backgroundImage: `url(${JSImage})`,
      }
   },
   {
      id: 5,
      title: 'HTML5',
      style: {
         backgroundImage: `url(${HTMLImage})`,
      }
   },
   {
      id: 6,
      title: 'CSS3',
      style: {
         backgroundImage: `url(${CSSImage})`,
      }
   },
];


export const Skills = () => {


   return (
      <div className={classes.skillsBlock} id='skills'>
         <div className={classes.container}>
            <Title value='My Skills' description='My current stack of technologies'/>
            <div className={classes.skills}>
               {skills.map(skill => <Skill key={skill.id}
                                           title={skill.title}
                                           style={skill.style}/>)}
            </div>
         </div>
      </div>
   );
}

