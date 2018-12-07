<?php
error_reporting(0);

$server="localhost:3306";
$user="boosting_colin";
$password="12345colin";
$db="boosting_Full";

// $server="localhost";
// $user="root";
// $password="";
// $db="boot";

$conn=mysql_connect($server,$user,$password);
mysql_select_db("$db");



?>