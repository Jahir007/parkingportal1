import { Form, Button } from "react-bootstrap"

import {GuestContext} from '../contexts/GuestContext';
import {useContext, useState} from 'react';
import Axios from "axios";


const EditForm1 = ({theGuest}) =>{

    const url = "http://localhost/Reactjs/parkportal/src/Api/guestupdate.php";

    const id = theGuest.id;

    const [firstname, setfirstname] = useState(theGuest.firstname);
    const [lcno, setlcno] = useState(theGuest.lcno);
    const [duration,setduration] = useState(theGuest.duration);
    const [slotno,setslotno] = useState(theGuest.slotno);
    const [startdate, setstartdate] = useState(theGuest.startdate);
    const [remarks,setremarks] = useState(theGuest.remarks)


    const {updateGuest} = useContext(GuestContext);

    const updatedGuest = {id, firstname, lcno, duration,slotno, startdate, remarks};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGuest(id, updatedGuest)
        console.log(updatedGuest);
        Axios.post(url,  {
            id: updatedGuest.id,
            firstname: updatedGuest.firstname,
            lcno: updatedGuest.lcno,
            duration: updatedGuest.duration,
            slotno: updatedGuest.slotno,
            startdate: updatedGuest.startdate,
            remarks: updatedGuest.remarks,
        })
        .then(res => console.log(res.data))
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e)=> setfirstname(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="lc_number"
                    name="lcno"
                    value={lcno}
                    onChange={(e)=> setlcno(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="duration "
                    name="duration"
                    value={duration}
                    onChange={(e)=> setduration(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="slot No"
                    name="slotno"
                    value={slotno}
                    onChange={(e)=> setslotno(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group controlId="date" bsSize="large">
                <Form.Control
                    type="date"
                    style={{ width: '100%' }}
                    placeholder="Start Date"
                    name="startdate"
                    value={startdate}
                    onChange={(e) => setstartdate(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="remarks "
                    name="remarks"
                    value={remarks}
                    onChange={(e)=> setremarks(e.target.value)}
                />
            </Form.Group>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Submit
            </Button>
        </Form>

     )
}

export default EditForm1;