import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {SlotContext} from '../contexts/SlotContext';
import Slot from './Slot';
import AddSlot from './AddSlot';
import SlotPagination from './SlotPagination';

const SlotList = () => {

    const {sortedSlots} = useContext(SlotContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [slotsPerPage] = useState(6)

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
    }, [sortedSlots])

    const indexOfLastSlot = currentPage * slotsPerPage;
    const indexOfFirstSlot = indexOfLastSlot - slotsPerPage;
    const currentSlots = sortedSlots.slice(indexOfFirstSlot, indexOfLastSlot);
    const totalPagesNum = Math.ceil(sortedSlots.length / slotsPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6 ">
                <h2>Manage <b>SLots</b></h2>
            </div>
            <div className="col-sm-6 ">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Slot</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Slot List Updated Succefully! 
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Slot Number</th>
                <th>Owner ID</th>
                <th>Created Date</th>
                {/* <th>Vehicle No</th>
                <th>Slot No</th> */}
            </tr>
        </thead>
        <tbody>

                {
                  currentSlots.map(slot => (
                      <tr key={slot.id}>
                        <Slot slot={slot} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <SlotPagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentSlots ={currentSlots}
                sortedSlots = {sortedSlots} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Slots
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddSlot />
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

export default SlotList;