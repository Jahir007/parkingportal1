import { Form, Button } from "react-bootstrap"

import {OwnerContext} from '../contexts/OwnerContext';
import {useContext, useState} from 'react';
import axios from "axios";

const EditForm = ({theOwner}) =>{


    const url = "http://localhost/Reactjs/parkportal/src/Api/update.php";


    const id = theOwner.id;

    const [firstname, setFirstName] = useState(theOwner.firstname);
    const [lastname, setLastName] = useState(theOwner.lastname);
    const [contactno, setContactNo] = useState(theOwner.contactno);
    const [email, setEmail] = useState(theOwner.email);


    const {updateOwner} = useContext(OwnerContext);

    const updatedOwner = {id, firstname, lastname, contactno, email};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateOwner(id, updatedOwner)
        console.log(updatedOwner);
        axios.post(url,  {
            id: updatedOwner.id,
            firstname: updatedOwner.firstname,
            lastname: updatedOwner.lastname,
            contactno: updatedOwner.contactno,
            email: updatedOwner.email,
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
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Contact No"
                    name="contactno"
                    value={contactno}
                    onChange={(e)=> setContactNo(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Button className="d-grid mx-auto" variant="success" type="submit" block>
                Edit Owner
            </Button>
        </Form>

     )
}

export default EditForm;