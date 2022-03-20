import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {OwnerContext} from '../contexts/OwnerContext';
import Owner from './Owner';
import AddForm from './AddForm';
import Pagination from './Pagination';

const OwnerList = () => {

    const {sortedOwners} = useContext(OwnerContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [ownersPerPage] = useState(6)

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
    }, [sortedOwners])

    const indexOfLastOwner = currentPage * ownersPerPage;
    const indexOfFirstOwner = indexOfLastOwner - ownersPerPage;
    const currentOwners = sortedOwners.slice(indexOfFirstOwner, indexOfLastOwner);
    const totalPagesNum = Math.ceil(sortedOwners.length / ownersPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6 ">
                <h2>Manage <b>Owners</b></h2>
            </div>
            <div className="col-sm-6 ">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Owner</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Owner List Updated Succefully! 
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact No</th>
                <th>Email</th>
                {/* <th>Vehicle No</th>
                <th>Slot No</th> */}
            </tr>
        </thead>
        <tbody>

                {
                  currentOwners.map(owner => (
                      <tr key={owner.id}>
                        <Owner owner={owner} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentOwners ={currentOwners}
                sortedOwners = {sortedOwners} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Owner
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
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

export default OwnerList;