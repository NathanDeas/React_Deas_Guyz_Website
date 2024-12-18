import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomeBody from "./components/Homebody";
import Calendar from "./components/Calendar";
import SongList from "./components/SongList";
import Booking from "./components/Booking";
import MailingList from "./components/MailingList";
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={ <HomeBody/> } />
                <Route path="calendar" element={ <Calendar/> } />
                <Route path="songlist" element={ <SongList/> } />
                <Route path="booking" element={ <Booking/> } />
                <Route path="mailinglist" element={ <MailingList/> } />
            </Routes>
        </div>

    );
}

export default App;
