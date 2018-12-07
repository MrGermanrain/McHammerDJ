<?php
include('config.php');
session_start();
if (isset($_POST['send'])) 
{
	
			$msg=$_POST['msg'];
			$uiid=$_POST['uid'];
			$u_name='admin';


			$sql=mysql_query("INSERT INTO `msg`(`user_id`, `u_type`,`msg`, `added_on`, `status`)
			 VALUES ('$uiid', '$u_name', '$msg',NOW(),'0')");

			if ($sql) 
			{
				header('location:chats.php?uid='.$uiid);
			}
			else
			{
				echo mysql_error();
			}
	
}
?>
