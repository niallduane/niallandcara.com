<?php
$name = $_POST['name'];
$email = $_POST['email'];
$req = $_POST['dietaryrequirements'];
$comments = $_POST['Comments'];
$attending = $_POST['attending'];

//Save to database.
$con=mysqli_connect("localhost","root","root","weddingsite");
if (mysqli_connect_errno())
{
    header('Content-type: application/json');
    die('{ "res": "false", "message": "Failed to connect to MySQL: ' . mysqli_connect_error() .'"}');
}

$attend = "Yes";
if ($attending == "false") 
{
    $attend = "No";
}

$sql = "INSERT INTO Replies (Name, Email, DietaryRequirements, Comments, Attending, CreatedAt) VALUES ('" .$name ."', '" .$email ."', '" .$req ."', '" .$comments ."'," .$attending .", CURRENT_DATE())";

if (!mysqli_query($con,$sql))
{
    header('Content-type: application/json');
    die('{ "res": "false", "message": "'.mysqli_error($con) .'"}');
}

mysqli_close($con);


//Email
$to = "caraphillips713+niallwedding@gmail.com,niallduane@gmail.com";
$subject = "RSVP";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = "<html><head></head><body>";
$message .= "<b>Name(s): </b>" .$name ."<br />";
$message .= "<b>Email: </b>" .$email ."<br />";
$message .= "<b>Attending: </b>" .$attend ."<br />";
$message .= "<b>Dietary Requirements: </b><br />" .$req ."<br />";
$message .= "<b>Comments: </b><br />" .$comments;
$message .="</body></html>";

mail($to, $subject, $message, $headers);

header('Content-type: application/json');
echo '{ "res": "true", "message": "" }';
?>