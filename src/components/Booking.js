import React, { useRef } from 'react';
import "./Booking.css"
import emailjs from '@emailjs/browser';

function Booking() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('booking_service', 'booking_contact_form', form.current, {
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
            <div className='booking_form'>
                <form ref={form} onSubmit={sendEmail}>
                  <h2>Interested in booking the band?</h2>
                  <p>Please include the type of function, the date or dates you are interested in and the location of the event.</p>
                    <div id="i_name">
                      <label>Name </label>
                      <input type="text" name="from_name" required/>
                    </div>
                    <div id="i_email">
                      <label>Email </label>
                      <input type="email" name="from_email" required/>
                    </div>
                    <div id="i_TOF">
                      <label>Type of Function </label>
                      <input type="text" name="function_type"  required/>
                    </div>
                    <div id="i_dates">
                      <label>Date(s) </label>
                      <input type="text" name="date" required/>
                    </div>
                    <div id="i_loc">
                      <label>Location </label>
                      <input type="text" name="location" required/>
                    </div>
                    <div id="i_mess">
                      <label>Message</label>
                      <textarea name="message" />
                    </div>
                    <input id="send_email" type="submit" value="Send" />
                    <br />
                </form>
            </div>
        </div>
    );
}
export default Booking;