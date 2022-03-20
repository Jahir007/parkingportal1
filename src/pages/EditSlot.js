import { Form, Button } from "react-bootstrap"

import {SlotContext} from '../contexts/SlotContext';
import {useContext, useState} from 'react';
import axios from "axios";

const EditSlot = ({theSlot}) =>{


    const url = "http://localhost/Reactjs/parkportal/src/Api/slotupdate.php";


    const id = theSlot.id;

    const [firstname, setFirstName] = useState(theSlot.firstname);
    const [slotnumber, setSlotNumber] = useState(theSlot.slotnumber);
    const [ownerid, setOwnerId] = useState(theSlot.ownerid);
    const [createdt, setCreatedt] = useState(theSlot.createdt);


    const {updateSlot} = useContext(SlotContext);

    const updatedSlot = {id, firstname, slotnumber, ownerid, createdt};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSlot(id, updatedSlot)
        console.log(updatedSlot);
        axios.post(url,  {
            id: updatedSlot.id,
            firstname: updatedSlot.firstname,
            slotnumber: updatedSlot.slotnumber,
            ownerid: updatedSlot.ownerid,
            createdt: updatedSlot.createdt,
        })
        .then(res => console.log(res.data))
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e)=> setFirstName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Slot Number"
                    name="slotnumber"
                    value={slotnumber}
                    onChange={(e)=> setSlotNumber(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Owner Id"
                    name="ownerid"
                    value={ownerid}
                    onChange={(e)=> setOwnerId(e.target.value)}
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
                    onChange={(e) => setCreatedt(e.target.value)}
                />
            </Form.Group>
            {/* <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Created Date"
                    name="createdt"
                    value={createdt}
                    onChange={(e)=> setCreatedt(e.target.value)}
                    required
                />
            </Form.Group> */}
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Edit Owner
            </Button>
        </Form>

     )
}

export default EditSlot;