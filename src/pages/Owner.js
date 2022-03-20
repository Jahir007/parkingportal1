import {useContext, useState, useEffect} from 'react';
import {OwnerContext} from '../contexts/OwnerContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
// import Axios from 'axios';




const Owner = ({owner}) => {

    // const url = "http://localhost/Reactjs/parkportal/src/Api/insert.php";

    const {deleteOwner} = useContext(OwnerContext)
    

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [owner])



    return (
        <>
            <td>{owner.firstname}</td>
            <td>{owner.lastname}</td>
            <td>{owner.contactno}</td>
            <td>{owner.email}</td>
            <td>{owner.vehicleno}</td>
            <td>{owner.slotno}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteOwner(owner.firstname)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Owner
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theOwner={owner} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Owner;