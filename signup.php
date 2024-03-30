<!-- php code -->
<?php
if(isset($_POST["name"]) && $_POST["password"] && $_POST["email"] && $_POST["phone"] && $_POST["gender"] && $_POST["dob"]){
$server="localhost";
$username= "root";
$password= "";
$database= "medcheck";

$con= mysqli_connect($server,$username,$password,$database);
if(!$con)
{
    die("connection abort". mysqli_connect_error());
}
//echo"db connected";

$name= $_POST['name'];
$pass= $_POST['password'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$sex=   $_POST['gender'];
$dob= $_POST['dob'];

$sql="INSERT INTO `medcheck`.`signup` (`Name`, `Password`, `Email`, `Phone`, `Sex`, `Dob`) VALUES ('$name', '$pass', '$email', '$phone', '$sex', '$dob');";
//echo $sql;
$result= mysqli_query($con,$sql);
$con->close();
}
?>


<!-- html code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body{
            background-color: #00B8CA;
        }
        form{
            background-color: white;
        }
        label{
            margin:0 10px 0 10px;
        }
    </style>
</head>
<body>
    
    <div>
        <form id="two" action="signup.php" method="post">
            <h1>Sign Up</h1>
            <br>
                <table>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text" name="name"></td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td><input type="password" name="password"></td>
                    </tr>
                    <tr>
                        <td>E-mail Id:</td>
                        <td><input type="text" name="email"></td>
                    </tr>
                    <tr>
                        <td>Phone no:</td>
                        <td><input type="text" name="phone"></td>
                    </tr>
                    <tr>
                        <td>Sex :</td>
                        <td>
                            Male<input type="radio" name="gender" value="Male">
                            Female<input type="radio" name="gender" value="Female">
                        </td>
                    </tr>
                    <tr>
                        <td>Date of Birth:</td>
                        <td><input type="date" name="dob"></td>
                    </tr>
                </table>
                <button style="margin-top: 30px;" id="button">Submit</button>
        </form>
        </div>
</body>
</html>