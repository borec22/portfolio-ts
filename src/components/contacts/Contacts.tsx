import React from 'react';
import classes from './Contacts.module.css';

export const Contacts = () => {
   return (
      <div className={classes.contactsBlock}>
         <div className={classes.container}>
            <h2 className={classes.title}>Contact</h2>
            <form action="#" className={classes.form}>
               <input type="text"/>
               <input type="text"/>
               <textarea name=""> </textarea>

               <button>Send Message</button>
            </form>
         </div>
      </div>
   );
}
