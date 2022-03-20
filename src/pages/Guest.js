import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react';
import EditForm1 from './EditForm1'
import {GuestContext} from '../contexts/GuestContext';




const Guest = ({guest}) => {

    const {deleteGuest} = useContext(GuestContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [guest])

    return (
        <>
            <td>{guest.firstname}</td>
            <td>{guest.lcno}</td>
            <td>{guest.duration}</td>
            <td>{guest.slotno}</td>
            <td>{guest.startdate}</td>
            <td>{guest.remarks}</td>
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
                    <button onClick={() => deleteGuest(guest.firstname)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Guest
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm1 theGuest={guest} />
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

export default Guest;