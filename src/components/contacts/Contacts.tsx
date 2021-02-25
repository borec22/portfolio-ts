import React from 'react';
import classes from './Contacts.module.scss';
import {Title} from '../../common/components/Title/Title';
import {Button} from '../../common/components/Button/Button';

export const Contacts = () => {
   return (
      <div id='contacts' className={classes.contactsBlock}>
         <div className={classes.container}>
            <Title value='Contact' description='Feel free to contact me anytime'/>

            <form action="#" className={classes.form}>
               <input type="text"
                      name="name"
                      className={classes.formControl}
                      placeholder="Name"
                      required/>

               <input type="email"
                      name='email'
                      className={classes.formControl}
                      placeholder="Email"
                      required/>

               <textarea name="message"
                         className={classes.formControl}
                         placeholder="Your message"
                         rows={5}
                         required/>

               <Button>Send Message</Button>
            </form>
         </div>
      </div>
   );
}
