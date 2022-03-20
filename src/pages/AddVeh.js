import { Form, Button } from "react-bootstrap"

import {VehicleContext} from '../contexts/VehicleContext';
import {useContext, useState} from 'react';
import Axios from 'axios' ;




const AddForm = () =>{
        
    const url = "http://localhost/Reactjs/parkportal/src/Api/vehinsert.php";

    const {addVehicle} = useContext(VehicleContext);

    const [newVehicle, setNewVehicle] = useState({
        categoryid: '', lcnumber: '', description: '', photo: '', ownerid: '', createdt: ''
    });

    const onInputChange = (e) => {
        setNewVehicle({...newVehicle,[e.target.name]: e.target.value})
    }

    const {categoryid, lcnumber, description, photo, ownerid, createdt} = newVehicle;

    const handleSubmit = (e) => {
        e.preventDefault();
        addVehicle(categoryid, lcnumber, description, photo, ownerid, createdt);
        console.log(newVehicle);
        Axios.post(url,  {
            // id: e.target.id,
            categoryid: newVehicle.categoryid,
            lcnumber: newVehicle.lcnumber,
            description: newVehicle.description,
            photo: newVehicle.photo,
            ownerid: newVehicle.ownerid,
            createdt: newVehicle.createdt
        })
        .then(res => console.log(res.addVehicle))
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Category ID"
                    name="categoryid"
                    value={categoryid}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="License Number"
                    name="lcnumber"
                    value={lcnumber}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="textarea"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="file"
                    placeholder="Photo"
                    name="photo"
                    value={photo}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Owner ID"
                    name="ownerid"
                    value={ownerid}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="date" bsSize="large">
                <Form.Control
                    type="date"
                    style={{ width: '100%' }}
                    placeholder="Start Date"
                    name="createdt"
                    value={createdt}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <br></br>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Add New Vehicle
            </Button>
        </Form>

     )
}

export default AddForm;