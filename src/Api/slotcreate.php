<?php

// phpinfo();
require_once 'config.php';


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
 header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");


$_POST =file_get_contents("php://input");
$_POST=json_decode($_POST,true);
// print_r($_POST);

if (is_array($_POST) && sizeof($_POST) > 0) {

   
  


$firstname = $_POST['firstname'];
$slotnumber = $_POST['slotnumber'];
$ownerid = $_POST['ownerid'];
$createdt = $_POST['createdt'];
 
$sql = "INSERT INTO tbl_slot (number, owner_id, created_date_time) VALUES ('$slotnumber', '$ownerid', '$createdt')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
}
?>

      