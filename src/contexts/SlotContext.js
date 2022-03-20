import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

export const SlotContext = createContext()

const SlotContextProvider  = (props) => {

    const url = "http://localhost/Reactjs/parkportal/src/Api/slotdelete.php";

    const [slots, setSlots] = useState([]);

    useEffect(()=> {
        setSlots(JSON.parse(localStorage.getItem('slots')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('slots', JSON.stringify(slots));
    })
    
    
    
    const sortedSlots = slots.sort((a,b)=>(a.slotnumber < b.slotnumber ? -1 : 1));
    
    
    
    const addSlot = (firstname, slotnumber, ownerid, createdt) => {
        setSlots([...slots , {id:uuidv4(), firstname, slotnumber, ownerid, createdt}])
    }
    
    const deleteSlot = (firstname, slotnumber, ownerid, createdt) => {
        setSlots(slots.filter(slot => slot.firstname !== firstname))
        Axios.post(url, {
            firstname, slotnumber, ownerid, createdt
        })
        .then(res => console.log(res))
        console.log(slots);
    }
    
    const updateSlot = (id, updatedSlot) => {
        setSlots(slots.map((slot) => slot.id === id ? updatedSlot : slot))
    }
    
        return (
            <SlotContext.Provider value={{sortedSlots, addSlot, deleteSlot, updateSlot}}>
                {props.children}
            </SlotContext.Provider>
        )
    }
    
    export default SlotContextProvider;