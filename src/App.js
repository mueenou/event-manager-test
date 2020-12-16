import './App.css';
import { Event } from './components/Event/Event';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [events, setEvents] = useState([])
  const [bookings, setBookings] = useState([])
  const [userData, setUserData] = useState([])

  // Traitement à faire une seule fois, au chargement de la page
  // On récupère les event (un seul) et les réservations (bookings) qu'on met dans les constantes
  // déclarés avant
  useEffect(() => {
    const getDatas = () => {
      axios.get('http://localhost:3001/event', {
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then((response) => {
          setEvents(response.data)
        })

        axios.get('http://localhost:3001/bookings', {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then((response) => {
          setBookings(response.data)
        })

        axios.get('http://localhost:3001/user', {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then((response) => {
          setUserData(response.data)
        })

      }
    getDatas();
  }, [setEvents, setBookings, setUserData])

  // book a ticket function
  const bookATicket = (user) => {
    axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      url: `http://127.0.0.1:3001/bookings`,
      data: {
        "user": {
          "id": user.id,
          "firstName": user.firstName,
          "lastName": user.lastName,
          "color": user.color,
          "avatar": user.avatar
        },
        "numberOfTickets": user.numberOfTickets ? user.numberOfTickets+1 : 1,
        "userId": user.id
      },
    })
    .then(() => {
      axios.get('http://localhost:3001/bookings', {
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then((response) => {
        setBookings(response.data)
      })
    })
   
  }

  const cancelBooking = (booking) => {
    axios.delete(`http://localhost:3001/bookings/${booking.id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      axios.get('http://localhost:3001/bookings', {
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then((response) => {
        setBookings(response.data)
      })
    })
  }

  return (
    <div className="App">
      {events.id &&
        <Event eventData={events} bookings={bookings} userData={userData} bookATicket={bookATicket} cancelBooking={cancelBooking} />
      }
    </div>
  );
}

export default App;
