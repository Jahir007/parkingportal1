import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {GuestContext} from '../contexts/GuestContext';
import Guest from './Guest';
import AddForm1 from './AddForm1';
import Pagination1 from './Pagination1';

const GuestList = () => {

    const {sortedGuests} = useContext(GuestContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [guestsPerPage] = useState(6)

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
    }, [sortedGuests])

    const indexOfLastGuest = currentPage * guestsPerPage;
    const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
    const currentGuests = sortedGuests.slice(indexOfFirstGuest, indexOfLastGuest);
    const totalPagesNum = Math.ceil(sortedGuests.length / guestsPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Guest</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add Guest</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Guest List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Lc_number</th>
                <th>duration</th>
                <th>Slot No</th>
                <th>Start-date</th>
                <th>Remarks</th>
                
            </tr>
        </thead>
        <tbody>

                {
                  currentGuests.map(guest => (
                      <tr key={guest.id}>
                        <Guest guest={guest} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination1 pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentGuests ={currentGuests}
                sortedGuests = {sortedGuests} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Guest Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm1 />
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

export default GuestList;