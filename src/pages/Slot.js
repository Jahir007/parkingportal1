import {useContext, useState, useEffect} from 'react';
import {SlotContext} from '../contexts/SlotContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditSlot from './EditSlot'; 
// import Axios from 'axios';




const Slot = ({slot}) => {

    // const url = "http://localhost/Reactjs/parkportal/src/Api/insert.php";

    const {deleteSlot} = useContext(SlotContext)
    

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [slot])



    return (
        <>
            <td>{slot.firstname}</td>
            <td>{slot.slotnumber}</td>
            <td>{slot.ownerid}</td>
            <td>{slot.createdt}</td>
            {/* <td>{slot.vehicleno}</td>
            <td>{slot.slotno}</td> */}
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
                    <button onClick={() => deleteSlot(slot.firstname)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Slot
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditSlot theSlot={slot} />
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

export default Slot;