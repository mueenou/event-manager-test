import './App.css';
import { Event } from './components/Event/Event';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [events, setEvents] = useState([])
  const [bookings, setBookings] = useState([])


  useEffect(() => {
    const getDatas = () => {
      axios.get('http://localhost:3001/event', {
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.data)
          setEvents(response.data)
        })

        axios.get('http://localhost:3001/bookings', {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response.data)
          setBookings(response.data)
        })
      }
    getDatas()
    console.log(bookings)
    console.log(events)
  }, [setEvents, setBookings])

  return (
    <div className="App">
      {events.id &&
        <Event eventData={events} bookings={bookings}/>
      }
    </div>
  );
}

export default App;
