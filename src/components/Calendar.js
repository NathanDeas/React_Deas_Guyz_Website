import React from "react";
import './Calendar.css';

function Calendar() {
    return (
        <div className="parent_container">
            <section className="calendar">
                <iframe src="https://calendar.google.com/calendar/embed?wkst=1&ctz=America%2FNew_York&showPrint=0&src=ZGd3Y2FsZW5kZXJAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679" 
                style={{ border: 0 }}
                width="90%"
                height="100%"
                title="Deas Guyz Calendar"
                />
            </section>
            <section className="calender_footer">
                <div className="res_note">
                    If you find that your date is booked, please e-mail us and we will put you on our backup list for the date. For all club dates, please call the clubs directly for reservations and to confirm the date. Thanks for your support!
                </div>
                <div className="club_contacts">
                    <ul>
                        <li><span className="cont_loc">​Jazz Corner:</span>(843)842-8620, The Village at Wexford</li>
                        <li><span className="cont_loc">​​​​Rooftop @ Poseidon:</span> (843)341-3838, Shelter Cove Towne Centre</li>
                        <li><span className="cont_loc">Uncorked:</span>(843)815-5168, 1533 Fording Island RD</li>
                        <li><span className="cont_loc">​Willie's:</span>(843)575-3483. 7 Dr. Martin Luther King DR, St. Helena Island, SC</li>
                        <li><span className="cont_loc">Ruby Lee's:</span>(843)715-2122, 46 Old Wild Horse RD, Hilton Head Island, SC </li>
                    </ul>
                </div>
            </section>
            <section className="listed_dates">

            </section>
            
        </div>
    );

}
export default Calendar;