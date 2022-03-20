import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

export const GuestContext = createContext()

const GuestContextProvider  = (props) => {

    const url = "http://localhost/Reactjs/parkportal/src/Api/guestdelete.php";

    const [guests, setGuests] = useState([]);

    useEffect(()=> {
        setGuests(JSON.parse(localStorage.getItem('guests')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('guests', JSON.stringify(guests));
    })
    
    
    
    const sortedGuests = guests.sort((a,b)=>(a.firstname < b.firstname ? -1 : 1));
    
    
    
    const addGuest = (firstname, lcno, duration, slotno, startdate, remarks) => {
        setGuests([...guests , {id:uuidv4(), firstname, lcno, duration,slotno, startdate, remarks}])
    }
    
    const deleteGuest = (firstname, lcno, duration, slotno, startdate, remarks) => {
        setGuests(guests.filter(guest => guest.firstname !== firstname))
        Axios.post(url, {
            firstname, lcno, duration, slotno, startdate, remarks
        })
        .then(res => console.log(res))
        console.log(guests);
    }
    
    const updateGuest = (id, updatedGuest) => {
        setGuests(guests.map((guest) => guest.id === id ? updatedGuest : guest))
    }
    
        return (
            <GuestContext.Provider value={{sortedGuests, addGuest, deleteGuest, updateGuest}}>
                {props.children}
            </GuestContext.Provider>
        )
    }
    
export default GuestContextProvider;