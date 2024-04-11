<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){

    // Database Connection
    $servername = "localhost";     //Change it also with your server name
    $username = "root";
    $password = "";     
    $dbname = "tgc_form";         //Change this with db name

    // Create Connection
    $conn = new mysqli($servername,$username,$password,$dbname);

    // Check Connection
    if($conn->connect_error){
        die("Connection failed: ". $conn->connect_error);
    }

    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // Get the source information
    $source = $_POST['source'];

    // Insert data into database
    $sql = "INSERT INTO form
    (name, email, phone, source) VALUES
    ('$name', '$email', '$phone', '$source')";

    if($conn->query($sql) === TRUE){
        echo "<h2>Data inserted Successfully</h2>";
        echo "<p>Thank you, $name! Your information has been successfully submitted</p>"
    }else{
        echo "<h2>Error Inserting Data</h2>";
        echo "<p>Sorry, $name! There was an error submitting your information. Please try again later.</p>"
    }

    $conn->close();
}
?>