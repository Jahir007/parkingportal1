<?php
    $servername = "192.168.99.3:3307";
    $database = "dbparkingmgmt";
    $username = "sc_14";
    $password = "123456";

    //Create connection
  $conn = new mysqli($servername,$username,$password, $database );
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed:" . $conn->connect_error);

    }
   
?>