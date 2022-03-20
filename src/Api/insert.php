<?php

// phpinfo();
require_once 'config.php';




header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
 header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

// echo 'hello';
// die;
// $servername = "192.168.99.3:3307";
// $database = "dbparkingmgmt";
// $username = "sc_14";
// $password = "123456";
// Create connection
// $conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
// if (!$conn) {
//       die("Connection failed: " . mysqli_connect_error());
// }
 
// echo "Connected successfully";

$_POST =file_get_contents("php://input");
$_POST=json_decode($_POST,true);
// print_r($_POST);

if (is_array($_POST) && sizeof($_POST) > 0) {

   



$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$contactno = $_POST['contactno'];
$email = $_POST['email'];
 
$sql = "INSERT INTO tbl_owner (firstname, lastname, contactno, email ) VALUES ('$firstname', '$lastname', '$contactno', '$email')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
}
?>


