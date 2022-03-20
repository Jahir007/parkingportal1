<?php

require_once "config.php";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
 header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$_POST =file_get_contents("php://input");
$_POST=json_decode($_POST,true);

    // if the form's update button is clicked, we need to procss the form
    	if (is_array($_POST) && sizeof($_POST) > 0) {
		$firstname = $_POST['firstname'];
		// $id = $_POST['id'];
		$lcno = $_POST['lcno'];
		$duration = $_POST['duration'];
		$slotno = $_POST['slotno'];
		$startdate = $_POST['startdate'];
		$remarks = $_POST['remarks'];

		// write the update query
		$sql = "UPDATE `tbl_guest_booking` SET `guest_name`='$firstname',`lc_number`='$lcno',`slot_id`='$slotno',`start_date`='$startdate',`remarks`='$remarks' WHERE `lc_number`='$lcno'";

		// execute the query
		$result = $conn->query($sql);

		if ($result == TRUE) {
			echo "Record updated successfully.";
		}else{
			echo "Error:" . $sql . "<br>" . $conn->error;
		}
	}
    

    // if the 'id' variable is set in the URL, we know that we need to edit a record
if (isset($_GET['lcno'])) {
	$lcno= $_GET['lcno'];

	// write SQL to get user data
	$sql = "SELECT * FROM `tbl_owner` WHERE `lc_number`='$lcno'";

	//Execute the sql
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		
		while ($row = $result->fetch_assoc()) {
			$firstname = $row['firstname'];
			$lcno = $row['lcno'];
			$duration = $row['duration'];
			$slotno = $row['slotno'];
			$startdate = $row['startdate'];
			$remarks = $row['remarks'];
			// $id = $row['id'];
		}

	} else{
		// If the 'id' value is not valid, redirect the user back to view.php page
		header('Location: view.php');
	}

}
?>