import classes from './Works.module.css';
import {Work} from './work/Work';

type WorkType = {
   id: number
   title: string
   description: string
}

const works: WorkType[] = [
   {
      id: 1,
      title: 'Social Network',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 2,
      title: 'Todolist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 3,
      title: 'Calculator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 4,
      title: 'Drump Pad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 5,
      title: 'Random Quote Machine', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
   {
      id: 6,
      title: 'Wikipedia Viewer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sequi!'
   },
];

export const Works = () => {
   return (
      <div className={classes.worksBlock}>
         <div className={classes.container}>
            <h2 className={classes.title}>My Works</h2>
            <div className={classes.works}>
               {works.map(work => <Work key={work.id}
                                        title={work.title}
                                        description={work.description}/>)}
            </div>
         </div>
      </div>
   );
}
