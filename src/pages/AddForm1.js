import { Form, Button } from "react-bootstrap"

import { GuestContext } from '../contexts/GuestContext';
import { useContext, useState } from 'react';
import Axios from "axios";




const AddForm1 = () => {

    const url = "http://localhost/Reactjs/parkportal/src/Api/guestcreate.php";

    const { addGuest } = useContext(GuestContext);

    const [newGuest, setNewGuest] = useState({
        firstname: "", lcno: "", duration: "", slotno: "", startdate: "", remarks: "",
    });

    const onInputChange = (e) => {
        setNewGuest({ ...newGuest, [e.target.name]: e.target.value })
    }

    const { firstname, lcno, duration, slotno, startdate, remarks } = newGuest;

    const handleSubmit = (e) => {
        e.preventDefault();
        addGuest(firstname, lcno, duration, slotno, startdate, remarks);
        console.log(newGuest);
        Axios.post(url, {
            // id: e.target.id,
            firstname: newGuest.firstname,
            lcno: newGuest.lcno,
            duration: newGuest.duration,
            slotno: newGuest.slotno,
            startdate: newGuest.startdate,
            remarks: newGuest.remarks
        })
            .then(res => console.log(res.addGuest))
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Lc_number"
                    name="lcno"
                    value={lcno}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="duration in hrs"
                    name="duration"
                    value={duration}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="slot ID number"
                    name="slotno"
                    value={slotno}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="date" bsSize="large">
                <Form.Control
                    type="date"
                    style={{ width: '100%' }}
                    placeholder="Start Date"
                    name="startdate"
                    value={startdate}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="remarks"
                    name="remarks"
                    value={remarks}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Add details
            </Button>
        </Form>

    )
}

export default AddForm1;