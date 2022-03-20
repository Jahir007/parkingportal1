import { Form, Button } from "react-bootstrap"

import {OwnerContext} from '../contexts/OwnerContext';
import {useContext, useState} from 'react';
import Axios from 'axios' ;




const AddForm = () =>{
        
    const url = "http://localhost/Reactjs/parkportal/src/Api/insert.php";

    const {addOwner} = useContext(OwnerContext);

    const [newOwner, setNewOwner] = useState({
        firstname:"", lastname:"", contactno:"", email:"", vehicleno:"", SlotNo:""
    });

    const onInputChange = (e) => {
        setNewOwner({...newOwner,[e.target.name]: e.target.value})
        // setNewOwner(newOwner);
        //  console.log(newOwner);
    }

    const {firstname, lastname, contactno, email, vehicleno, SlotNo} = newOwner;

    const handleSubmit = (e) => {
        e.preventDefault();
        addOwner(firstname, lastname, contactno, email, vehicleno, SlotNo);
        console.log(newOwner);
        Axios.post(url,  {
            // id: e.target.id,
            firstname: newOwner.firstname,
            lastname: newOwner.lastname,
            contactno: newOwner.contactno,
            email: newOwner.email,
            vehicleno: newOwner.vehicleno,
            SlotNo: newOwner.SlotNo    
        })
        .then(res => console.log(res.addOwner))
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
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Contact No"
                    name="contactno"
                    value={contactno}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            {/* <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Vehicle No"
                    name="vehicleno"
                    value={vehicleno}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group> */}
            {/* <Form.Group>
            <Select options={options} />
            </Form.Group> */}
            <br></br>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Add New Owner
            </Button>
        </Form>

     )
}

export default AddForm;