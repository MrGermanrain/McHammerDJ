<?php
error_reporting(0);

$server="localhost";
$user="root";
$password="";
$db="colin";

// $server="localhost";
// $user="root";
// $password="";
// $db="boot";

$conn=mysql_connect($server,$user,$password);
mysql_select_db("$db");



?>