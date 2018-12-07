<?php
include('config.php');
session_start();
if (isset($_POST['payment'])) 
{
	$user=$_SESSION['uid'];
	$csr=$_POST['csr'];
	$dsr=$_POST['dsr'];
	$button=$_POST['button'];
	$code=$_POST['code'];

	$sql=mysql_query("INSERT INTO `sologames`(`user`,`csr`, `dsr`, `button`, `code`, `added_on`, `status`) 
		VALUES ('$user','$csr','$dsr','$button','$code',NOW(),'0')");

	if ($sql) 
	{
		echo "<script>alert ('order successful'); </script>";
		header('location:https://www.paypal.com/in/home');
	}
	else{
		echo mysql_error();
	}
}
?>