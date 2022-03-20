import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {VehicleContext} from '../contexts/VehicleContext';
import Vehicle from './Vehicle';
import AddVeh from './AddVeh';
import VehPagination from './VehPagination';

const VehList = () => {

    const {sortedVehicles} = useContext(VehicleContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [vehiclesPerPage] = useState(6)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedVehicles])

    const indexOfLastVehicle = currentPage * vehiclesPerPage;
    const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
    const currentVehicles = sortedVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
    const totalPagesNum = Math.ceil(sortedVehicles.length / vehiclesPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Vehicle</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add vehicle</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        vehicle List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Category ID</th>
                <th>License No</th>
                <th>description</th>
                <th>Photo</th>
                <th>Owner ID</th>
                <th>Date</th>
                
            </tr>
        </thead>
        <tbody>

                {
                  currentVehicles.map(vehicle => (
                      <tr key={vehicle.id}>
                        <Vehicle vehicle={vehicle} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <VehPagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentVehicles ={currentVehicles}
                sortedVehicles = {sortedVehicles} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Vehcile Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddVeh />
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

export default VehList;