import React from 'react';
import './users.css';

export const Users = ({ bookings }) => {

    return (
        <div className="users-container">
            <h2>Liste des participants ({bookings.length})</h2>
            <div className="users-list">
                {/* Affichier si la largeur de la fenêtre est supérieur 768 pixels */}
                <div className="users-column-title">
                    <span>Salarié</span>
                    <span>Quantité réservée</span>
                </div>
                <ul>
                {/* Si la réservation contient une image on affiche une <li> sinon une différente <li> */}
                {bookings.map((booking) => (
                    booking.user.avatar.url ? 
                    <li key={booking.id}>
                        <div>
                            <img src={booking.user.avatar.url} alt='face'/>
                            <span className="user-name">{booking.user.firstName} {booking.user.lastName}</span>
                        </div>
                        <span className="user-ticket">{booking.numberOfTickets}</span>
                    </li> : 
                    <li key={booking.id}>
                        <div>
                            <div style={{width: '40px', height: '40px', borderRadius: '40px', background: `${booking.user.color}`}}>
                                <span>{booking.user.firstName[0] + booking.user.lastName[0]}</span>
                            </div>
                            <span className="user-name">{booking.user.firstName} {booking.user.lastName}</span>
                        </div>
                        <span className="user-ticket">{booking.numberOfTickets}</span>
                    </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}
