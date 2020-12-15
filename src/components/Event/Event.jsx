import React from 'react'
import "./event.css"
import { Actions } from '../Actions/Actions'
import { Users } from '../Users/Users';

export const Event = ({ eventData, bookings }) => {


    const startDateTime = new Date(eventData.startAt);
    const endDateTime = new Date(eventData.endAt);

    const formatDate = (date) => ({
        year: new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date),
        month: new Intl.DateTimeFormat('fr', { month: 'short' }).format(date),
        day: new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
    })

    console.log(formatDate(startDateTime).day, formatDate(startDateTime).month, formatDate(startDateTime).year);

    console.log(startDateTime.getMonth())

    const localDateTime = new Date(Date.UTC(startDateTime.getFullYear(), startDateTime.getMonth(), startDateTime.getDate()))
    console.log(localDateTime.toLocaleDateString("fr-FR"))

    const getMinutes = (date) => {
        if(date.getMinutes() < 10) {
            return "0"+date.getMinutes();
        } else {
            return date.getMinutes();
        }
    }

    const getEventImage = () => {
        return {
            backgroundImage: `url("${eventData.image.url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }

    return (
        <div className="event">
            <div>
                <div className="event-image" style={getEventImage()}>
                    <div className="event-date" >
                        <p>
                            {
                                formatDate(startDateTime).month.toUpperCase()[0] +
                                formatDate(startDateTime).month.toUpperCase()[1] +
                                formatDate(startDateTime).month.toUpperCase()[2]
                            }
                        </p>
                        <p>{formatDate(startDateTime).day}</p>
                    </div>
                </div>
                <h1>{eventData.title}</h1>
                <div className="event-time">
                    <p>{startDateTime.getHours()}:{getMinutes(startDateTime)} - {endDateTime.getHours()}:{getMinutes(endDateTime)}</p>
                </div>
                <div className="event-description">
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
                <Users bookings={bookings}/>
                {/* <Actions/> */}
            </div>
        </div>
    )
}
