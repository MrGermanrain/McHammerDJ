<?php

$server="localhost";
$user="root";
$password="";
$db="colinkeoing";

$conn=mysql_connect($server,$user,$password);
mysql_select_db("$db");



?>

<?php

$ch = curl_init("http://www.example-webpage.com/file.html");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
$content = curl_exec($ch);
curl_close($ch);
echo $content;

?>