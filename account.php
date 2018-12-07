<?php 
include('config.php');
session_start();
if (isset($_POST['sub'])) 
{
 	$uid=$_SESSION['uid'];
	$platform=$_POST['platform'];
	$region=$_POST['region'];
	$email=$_POST['email'];
	$password=$_POST['pass'];

	$hero=$_POST['cbx'];
	$hro=implode(',', $hero);

	$msg=$_POST['msg'];

	if (isset($_SESSION['user'])) 
	{
		$sql=mysql_query("INSERT INTO `game`(`user_id`,`platform`, `region`, `email`, `password`, `heroes`, `notes`, `added_on`, `status`) 
			VALUES ('$uid','$platform','$region','$email','$password','$hro','$msg',NOW(),'0')");
		
		if ($sql) 
		{
			header('location:index.php');
		}
		else{
			echo mysql_error();
		}

	}
	else{
		header('location:login.php');
	}

	



}	
?>