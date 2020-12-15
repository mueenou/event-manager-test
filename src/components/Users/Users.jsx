import React from 'react';
import './users.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Users = ({ bookings }) => {


    return (
        <div className="users-container">
            <h2>Liste des participants (8)</h2>
            <div className="users-list">
                <ul>
                {bookings.map((booking) => (
                    booking.user.avatar.url ? 
                    <li>
                        <div>
                            <img src={booking.user.avatar.url} alt='face'/>
                            <span>{booking.user.firstName} {booking.user.lastName}</span>
                        </div>
                        <span className="user-ticket">{booking.numberOfTickets}</span>
                    </li> : 
                    <li>
                        <div>
                            <div style={{width: '40px', height: '40px', borderRadius: '40px', background: `${booking.user.color}`}}>
                                <span>{booking.user.firstName[0] + booking.user.lastName[0]}</span>
                            </div>
                            {/* <img src='https://i.pinimg.com/736x/39/34/1a/39341ac32898c0a5d0d3fc189cda0f79.jpg' alt='face'/> */}
                            <span>{booking.user.firstName} {booking.user.lastName}</span>
                        </div>
                        <span className="user-ticket">{booking.numberOfTickets}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
