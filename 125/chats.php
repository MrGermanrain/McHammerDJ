 

<?php
include('include/config.php');

$uid=$_GET['uid'];

$update=mysql_query("UPDATE `msg` SET `status`='1' WHERE `user_id`= '$uid'");

if (isset($_GET['del'])) 
{
    $del=$_GET['del'];
    $sql=mysql_query("DELETE FROM message WHERE `id`='$del'");

    if ($sql) 
    {
        echo "<script>alert ('Successfully Deleted'); </script>";       
    }
    else
    {
        echo mysql_error();

    }
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>        
        <!-- META SECTION -->
        <title>Joli Admin - Responsive Bootstrap Admin Template</title>            
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <!-- END META SECTION -->
        
        <!-- CSS INCLUDE -->        
        <link rel="stylesheet" type="text/css" id="theme" href="css/theme-default.css"/>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

        <!-- EOF CSS INCLUDE -->                                      
    </head>
    <body>
        <!-- START PAGE CONTAINER -->
        <div class="page-container">
            
                            <?php include('include/header.php'); ?>
                    
                
                <!-- START BREADCRUMB -->
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tables</a></li>
                    <li class="active">Basic</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Contacts Tables</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">
                
                    
                    
                    <div class="row">
                      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->


<html>
<head>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" rel="stylesheet"

</head>
<body>
<div class="container">
<h3 class=" text-center">Messaging</h3>
<div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <input type="text" class="search-bar"  placeholder="Search" >
                <span class="input-group-addon">
                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                </span> </div>
            </div>
          </div>
         
        </div>
        <div class="mesgs">
          <div class="msg_history">
         

<?php  
include 'include/config.php';
$uid=$_GET['uid'];

$update=mysql_query("UPDATE `msg` SET `status`='1' WHERE `user_id`= '$uid'");

$sql_in= mysql_query("SELECT * FROM msg where user_id ='$uid'");
  while ($r=mysql_fetch_array($sql_in)) {

   $type = $r['u_type'];
    ?>
    <?php  
      if ($type=='admin') {
        ?>
        <div class="incoming_msg">
                                      <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                                      <div class="received_msg">
                                        <div class="received_withd_msg">
                                          <p><?php echo $r['msg']; ?></p>
                                          <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                      </div>
                                    </div>

    <?php
       
      }
      if ($type=='user') {
     ?>
     <div class="outgoing_msg">
                                      <div class="sent_msg">
                                        <p><?php echo $r['msg']; ?></p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                                    </div>
    <?php

      }

    ?>

    
    <?php
  }
?>


 

          <div class="type_msg">
            <div class="input_msg_write">
             <form action="msg.php" method="post">
              <input type="hidden" name="uid" value="<?php echo $_GET['uid']; ?>">
                                          <input type="text" class="write_msg" placeholder="Type a message" name="msg" />
                                          <button class="msg_send_btn" type="submit" name="send" style="background-color: #337ab7;"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                      </form>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
    </div></div>
    </body>
    </html>


    <style type="text/css">
      


      .container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; padding:
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
    </style>

                   </div>
                   </div>          
            <!-- END PAGE CONTENT -->
        </div>
        <!-- END PAGE CONTAINER -->    

        <!-- MESSAGE BOX-->
        
        


            <div class="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                       <div >
            <h3 class=" text-center">Chat</h3>
            <div class="messaging">
                  <div class="inbox_msg">
                    <div class="mesgs" style="width: 100%;">
                      <div class="msg_history" style="height: 300px;">
                        
                        <div class="incoming_msg">
                          <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                          <div class="received_msg">
                            <div class="received_withd_msg">
                              <p>Test which is a new approach to have all
                                solutions</p>
                              <span class="time_date"> 11:01 AM    |    June 9</span></div>
                          </div>
                        </div>
                        <div class="outgoing_msg">
                          <div class="sent_msg">
                            <p>Test which is a new approach to have all
                              solutions</p>
                            <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                        </div>
                        
                      </div>
                      <div class="type_msg">
                        <div class="input_msg_write">
                        <form action="send.php" method="post" >
                          <input type="text" class="write_msg" placeholder="Type a message" name="msg" />
                          <button class="msg_send_btn" type="button" name="send"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>      
                </div>
            </div>
    <style type="text/css">
        .container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; padding:
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
    </style>

                    </div>

                       
                    </div>
                  </div>
                </div>
            </div>    
        <!-- END MESSAGE BOX-->
       

        <!-- START PRELOADS -->
        <audio id="audio-alert" src="audio/alert.mp3" preload="auto"></audio>
        <audio id="audio-fail" src="audio/fail.mp3" preload="auto"></audio>
        <!-- END PRELOADS -->                      

    <!-- START SCRIPTS -->
        <!-- START PLUGINS -->
        <script type="text/javascript" src="js/plugins/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="js/plugins/jquery/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap.min.js"></script>        
        <!-- END PLUGINS -->
        
        <!-- START THIS PAGE PLUGINS-->        
        <script type='text/javascript' src='js/plugins/icheck/icheck.min.js'></script>
        <script type="text/javascript" src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
        
        
        <script type="text/javascript" src="js/plugins/datatables/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="js/plugins/tableexport/tableExport.js"></script>
  <script type="text/javascript" src="js/plugins/tableexport/jquery.base64.js"></script>
  <script type="text/javascript" src="js/plugins/tableexport/html2canvas.js"></script>
  <script type="text/javascript" src="js/plugins/tableexport/jspdf/libs/sprintf.js"></script>
  <script type="text/javascript" src="js/plugins/tableexport/jspdf/jspdf.js"></script>
  <script type="text/javascript" src="js/plugins/tableexport/jspdf/libs/base64.js"></script>        
        <!-- END THIS PAGE PLUGINS-->  
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->                 
    </body>
</html>





















