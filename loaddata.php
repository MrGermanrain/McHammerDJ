
<?php

if( isset( $_POST['user_name'] ) )
{

include 'config.php';

			$uiid=$_SESSION['uid'];


$selectdata = " SELECT * FROM msg WHERE u_type= '$uiid' ";

$query = mysql_query($selectdata);

while($row = mysql_fetch_array($query))
{
 echo "<p>".$row['msg']."</p>";
 echo "<p>".$row['status']."</p>";
}

}
?>