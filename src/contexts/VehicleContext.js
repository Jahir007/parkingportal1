import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

export const VehicleContext = createContext()

const VehicleContextProvider  = (props) => {

    const url = "http://localhost/Reactjs/parkportal/src/Api/vehdelete.php";

    const [vehicles, setVehicles] = useState([]);

    useEffect(()=> {
        setVehicles(JSON.parse(localStorage.getItem('vehicles')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('vehicle', JSON.stringify(vehicles));
    })
    
    
    
    const sortedVehicles = vehicles.sort((a,b)=>(a.categoryid < b.categoryid ? -1 : 1));
    
    
    
    const addVehicle = (categoryid, lcnumber, description, photo, ownerid, createdt) => {
        setVehicles([...vehicles , {id:uuidv4(), categoryid, lcnumber, description, photo, ownerid, createdt}])
    }
    
    const deleteVehicle = (categoryid, lcnumber, description, photo, ownerid, createdt) => {
        setVehicles(vehicles.filter(vehicle => vehicle.categoryid !== categoryid))
        Axios.post(url, {
            categoryid, lcnumber, description, photo, ownerid, createdt
        })
        .then(res => console.log(res))
        console.log(vehicles);
    }
    
    const updateVehicle = (id, updatedVehicle) => {
        setVehicles(vehicles.map((vehicle) => vehicle.id === id ? updatedVehicle : vehicle))
    }
    
        return (
            <VehicleContext.Provider value={{sortedVehicles, addVehicle, deleteVehicle, updateVehicle}}>
                {props.children}
            </VehicleContext.Provider>
        )
    }
    
export default VehicleContextProvider;