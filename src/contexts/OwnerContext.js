import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

export const OwnerContext = createContext()

const OwnerContextProvider  = (props) => {

    const url = "http://localhost/Reactjs/parkportal/src/Api/delete.php";

    const [owners, setOwners] = useState([]);

    useEffect(()=> {
        setOwners(JSON.parse(localStorage.getItem('owners')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('owners', JSON.stringify(owners));
    })
    
    
    
    const sortedOwners = owners.sort((a,b)=>(a.firstname < b.firstname ? -1 : 1));
    
    
    
    const addOwner = (firstname, lastname, contactno, email) => {
        setOwners([...owners , {id:uuidv4(), firstname, lastname, contactno, email}])
    }
    
    const deleteOwner = (firstname, lastname, contactno, email) => {
        setOwners(owners.filter(owner => owner.firstname !== firstname))
        Axios.post(url, {
            firstname, lastname, contactno, email
            // vehicleno: owners.vehicleno,
            // slotno: owners.slotno

        })
        .then(res => console.log(res))
        console.log(owners);
    }
    
    const updateOwner = (id, updatedOwner) => {
        setOwners(owners.map((owner) => owner.id === id ? updatedOwner : owner))
    }
    
        return (
            <OwnerContext.Provider value={{sortedOwners, addOwner, deleteOwner, updateOwner}}>
                {props.children}
            </OwnerContext.Provider>
        )
    }
    
    export default OwnerContextProvider;