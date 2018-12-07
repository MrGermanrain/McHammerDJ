<?php
include('config.php');
session_start();
if (isset($_POST['send'])) 
{
	if (isset($_SESSION['user'])) 
	{
			$msg=$_POST['msg'];
			$uiid=$_SESSION['uid'];
			$u_name='user';


			$sql=mysql_query("INSERT INTO `msg`(`user_id`, `u_type`,`msg`, `added_on`, `status`) VALUES ('$uiid', '$u_name', '$msg',NOW(),'0')");

			if (sql) 
			{
				header('location:index.php#chat');
			}
			else
			{
				echo mysql_error();
			}
	}
	else	
		{
			header('location:login.php');
		}
}
?>
