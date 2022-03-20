import { Form, Button } from "react-bootstrap"

import {SlotContext} from '../contexts/SlotContext';
import {useContext, useState} from 'react';
import Axios from 'axios' ;




const AddSlot = () =>{
        
    const url = "http://localhost/Reactjs/parkportal/src/Api/slotcreate.php";

    const {addSlot} = useContext(SlotContext);

    const [newSlot, setNewSlot] = useState({
        firstname:"", slotnumber:"", ownerid:"", createdt:""
    });

    const onInputChange = (e) => {
        setNewSlot({...newSlot,[e.target.name]: e.target.value})
        // setNewOwner(newOwner);
        //  console.log(newOwner);
    }

    const {firstname, slotnumber, ownerid, createdt} = newSlot;

    const handleSubmit = (e) => {
        e.preventDefault();
        addSlot(firstname, slotnumber, ownerid, createdt);
        console.log(newSlot);
        Axios.post(url,  {
            // id: e.target.id,
            firstname: newSlot.firstname,
            slotnumber: newSlot.slotnumber,
            ownerid: newSlot.ownerid,
            createdt: newSlot.createdt   
        })
        .then(res => console.log(res.addSlot))
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Slot Number"
                    name="slotnumber"
                    value={slotnumber}
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
                Add New Owner
            </Button>
        </Form>

     )
}

export default AddSlot;