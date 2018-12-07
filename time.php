			<?php
			session_start();
                include('config.php');
                $idu=$_SESSION['uid'];

                $sl=mysql_query("SELECT * FROM `skillboot` WHERE `user_id`='$idu' ORDER BY `id` DESC LIMIT 1 ");

                if (mysql_num_rows($sl)>0) 
                    {
                      while ($ew=mysql_fetch_array($sl)) 
                      {

                $date1=date('d-m-Y H:i:s');
               
                $date2 = $ew['date'];

$datetime1 = new DateTime($date2);
$datetime2 = new DateTime($date1);
$interval = $datetime1->diff($datetime2);
echo $interval->format('%R%a days');


                            
            }} ?>