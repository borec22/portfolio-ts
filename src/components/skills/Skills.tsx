import classes from './Skills.module.css';
import {Skill} from './skill/Skill';

type SkillType = {
   id: number
   title: string
   description: string
}

const skills: SkillType[] = [
   {
      id: 1,
      title: 'HTML',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 2,
      title: 'CSS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 3,
      title: 'JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 4,
      title: 'Typescript',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 5,
      title: 'Git', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 6,
      title: 'Material-UI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
];

export const Skills = () => {
   return (
      <div className={classes.skillsBlock}>
         <div className={classes.container}>
            <h2 className={classes.title}>My Skills</h2>
            <div className={classes.skills}>
               {skills.map(skill => <Skill key={skill.id}
                                           title={skill.title}
                                           description={skill.description}/>)}
            </div>
         </div>
      </div>
   );
}
