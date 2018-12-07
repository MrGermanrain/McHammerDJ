<?php
include('config.php');
if(isSet($_POST['content']))
{
$content=$_POST['content'];
mysql_query("insert into msg(msg) values ('$content')");
	
	

}
?>
<b><?php echo $r['msg']; ?></b>