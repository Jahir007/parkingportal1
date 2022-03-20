<?php
    require_once "config.php";


    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    $_POST =file_get_contents("php://input");
    $_POST=json_decode($_POST,true);

    // if the 'id' variable is set in the URL, we hnow that we need to edit a record
    if(isset($_POST['slotnumber'])) {
        $slotnumber = $_POST['ownerid'];

        //write delete query
        $sql  = "DELETE FROM `tbl_slot` WHERE `id`= '$id'";

        //execute the query
        $result = $conn->query($sql);
        if ($result == TRUE) 
            {
                echo "Record deleted successfully";
            }
          
    	else{
			echo "Error:" . $sql . "<br>" . $conn->error;
        }
    }
?>