import React, { useRef } from 'react';
import "./MailingList.css"
import emailjs from '@emailjs/browser';


function MailingList() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('mailing_service', 'mailing_list_form', form.current, {
            publicKey: 'wNijasEO-1hSbN_ZV',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Success! We will get back in touch with you as soon as possible. We appreciate your interest and your support!");
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Error! We were unable to process your request at this time. We appreciate your interest and your support!");
            },
          );
      };
    return (
        <div className='parent_container'>
            <div className='form_area'>
                <form ref={form} onSubmit={sendEmail}>
                    <h2>Join the Deas-Guyz Mailing List</h2>
                    <p>
                        If you would like to occasionally be kept up to date on news regarding Deas-Guyz, 
                        please fill in the form below and we will add you to our e-mail list.  Thanks for 
                        your support and we look forward to seeing you soon!
                    </p>
                    <div id="i_name">
                      <label>Name </label>
                      <input type="text" name="from_name" required/>
                    </div>
                    <div id="i_email">
                      <label>Email </label>
                      <input type="email" name="from_email" required/>
                    </div>
                    <input id="send_email" type="submit" value="Subscribe To Mailing List" />
                    <br />
                </form>
            </div>
        </div>
    )
}
export default MailingList;