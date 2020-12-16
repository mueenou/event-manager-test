import React from 'react';
import './actions.css';
import { useState, useEffect } from 'react';

export const Actions = ({userData, bookATicket, bookings, cancelBooking, eventData}) => {

    const [isModifying, setIsModifying] = useState(false);

    const cancelHandler = (foundBooking) => {
        setIsModifying(false);
        cancelBooking(foundBooking)
    }

    // On render 2 différentes div, si l'utilisateur à déja réservé on affiche les éléments de modification
    // sinon les éléments normaux
    const userHasBooked = () => {
        const foundBooking = bookings.find((booking) => {
            return booking.userId === userData.id
        })
        // Ternaire pour faire le test
        return foundBooking ?
        <>
            <div id="not-free-ticket">J'y vais ! <span>({foundBooking.numberOfTickets} place réservée)</span></div>
            {!isModifying ? <button className="modify-button" onClick={() => setIsModifying(true) }>Modifier ma réservation</button> :
                <div className="modify-buttons-container">
                    <button onClick={() => cancelHandler(foundBooking)}>Annuler la réservation</button>
                </div>
            }
        </>
        :
        <>
            {/* Afficher gratuit si le prix est égale à 0 sinon afficher le prix complet */}
            <div>{ parseInt(eventData.price) === 0 ? 'Gratuit' : eventData.price+' €' }</div>
            <button className="register-button" onClick={() => bookATicket(userData)}>Réserver</button>
        </>
    }
    return (
        <div className="actions-container">
            {userHasBooked()}
        </div>
    )
}
