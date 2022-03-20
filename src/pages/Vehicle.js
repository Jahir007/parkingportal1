import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react';
import EditVeh from './EditVeh'
import {VehicleContext} from '../contexts/VehicleContext';




const Vehicle = ({vehicle}) => {

    const {deleteVehicle} = useContext(VehicleContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [vehicle])

    return (
        <>
            <td>{vehicle.categoryid}</td>
            <td>{vehicle.lcnumber}</td>
            <td>{vehicle.description}</td>
            <td>{vehicle.photo}</td>
            <td>{vehicle.ownerid}</td>
            <td>{vehicle.createdt}</td>
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
                    <button onClick={() => deleteVehicle(vehicle.categoryid)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Vehicle
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditVeh theVehicle={vehicle} />
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

export default Vehicle;