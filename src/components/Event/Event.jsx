import React from 'react'
import "./event.css"
import { Actions } from '../Actions/Actions'
import { Users } from '../Users/Users';

export const Event = ({ eventData, bookings, userData, bookATicket, cancelBooking }) => {

    const startDateTime = new Date(eventData.startAt);
    const endDateTime = new Date(eventData.endAt);

    // Formatation de la date sous forme jour mois année et traduction en français
    const formatDate = (date) => ({
        year: new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date),
        month: new Intl.DateTimeFormat('fr', { month: 'short' }).format(date),
        day: new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
    })

    console.log(formatDate(startDateTime).day, formatDate(startDateTime).month, formatDate(startDateTime).year);

    console.log(startDateTime.getMonth())

    // Ajout d'un "0" si les minutes sont inférieures à 10 pour éviter ex: 19h1 au lieu de 19h01
    const getMinutes = (date) => {
        if(date.getMinutes() < 10) {
            return "0"+date.getMinutes();
        } else {
            return date.getMinutes();
        }
    }


    // Style de la div contenant l'image de l'event en background (dynamique)
    const getEventImage = () => {
        return {
            backgroundImage: `url("${eventData.image.url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }

    return (
        <div className="event">
            <div className="">
                <div className="event-description-container">
                    <div className="event-image" style={getEventImage()}>
                        <div className="event-date" >
                            <p>
                                {
                                    formatDate(startDateTime).month.toUpperCase()[0] +
                                    formatDate(startDateTime).month.toUpperCase()[1] +
                                    formatDate(startDateTime).month.toUpperCase()[2]
                                }
                            </p>
                            <p>{parseInt(formatDate(startDateTime).day)}</p>
                        </div>
                    </div>
                    <h1>{eventData.title}</h1>
                    <div className="event-time">
                        <p>{startDateTime.getHours()}:{getMinutes(startDateTime)} - {endDateTime.getHours()}:{getMinutes(endDateTime)}</p>
                    </div>
                <div className="event-info">
                    <div className="availability">
                        <p>Places restantes</p>
                        <p>{eventData.remainingTickets}</p>
                    </div>
                    <div className="closing-date">
                        <p>Date de clôtures</p>
                        <p>{formatDate(endDateTime).day} {formatDate(endDateTime).month} {formatDate(endDateTime).year}</p>
                    </div>
                </div>
                <div className="event-text">
                    <p>{eventData.description}</p>
                </div>
                </div>
                <div className="event-cancel-policy">
                    <h3>Politique d’annulation et de remboursement</h3>
                    <p>Les annulations et remboursements peuvent s’effectuer jusqu’à la date de clôture des inscriptions soit jusqu’au <span>{formatDate(endDateTime).day} {formatDate(endDateTime).month} {formatDate(endDateTime).year}</span>.</p>
                </div>
                <Users bookings={bookings}/>
            </div>
            <Actions eventData={eventData} userData={userData} bookATicket={bookATicket} bookings={bookings} cancelBooking={cancelBooking} />
        </div>
    )
}
