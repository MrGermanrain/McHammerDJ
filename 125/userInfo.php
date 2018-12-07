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
        <style >
            input[type="text"]{
                box-shadow: none !important;
                border-radius: 0!important;
                border-top: none !important;
                border-left: none !important;
                border-right: none !important;
                border-bottom: 1px solid black !important;
                color: seagreen !important;
                font-size: 16px;
            }
            label{
                 text-align:left !important ;
                 font-size: 16px;
            }
        </style>
        <!-- EOF CSS INCLUDE -->                   
    </head>
    <body>
        <!-- START PAGE CONTAINER -->
        <div class="page-container">           
            <?php include('include/header.php'); ?>       
            <!-- PAGE CONTENT WRAPPER -->
            <div class="page-content-wrap">         
                <div class="row">
                    <div class="col-md-12">                        
                        <form class="form-horizontal">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Order Info</h3>
                                <ul class="btn btn-primary " style="float: right;">
                                <?php
                                    $usr_id=$_POST['usr_id'];
                                    error_reporting(0);
                                    include('include/config.php');
                                    $query4 =mysql_query("SELECT * FROM `skill` WHERE `user`='$usr_id' ")or die (mysql_error());
                                    if (mysql_num_rows($query4)>0){
                                    while ($row4=mysql_fetch_array($query4)){
                                ?>
                                    <li><a href="update-skills.php?uiid=<?php echo $row4['usr_id']; ?>">Update</a></li>
                                </ul>
                            <?php } } ?>
                            </div>
                             <div class='panel-body'> 
                            <?php
                                $usr_id=$_POST['usr_id'];
                                error_reporting(0);
                                include('include/config.php');
                                $query =mysql_query("SELECT * FROM `register` WHERE `id`='$usr_id' ")or die (mysql_error());
                                $query1 =mysql_query("SELECT * FROM `skillboot` WHERE `id`='$usr_id' ")or die (mysql_error());
                                $query2 =mysql_query("SELECT * FROM `game` WHERE `user_id`='$usr_id' ")or die (mysql_error());
                                $query3 =mysql_query("SELECT * FROM `skill` WHERE `user`='$usr_id' ")or die (mysql_error());



                                if (mysql_num_rows($query1)>0){
                                    while ($row=mysql_fetch_array($query1)){
                            ?>
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Sr.No</label>
                                        <div class='col-md-6 col-xs-12'>                                            
                                           <input type='text' class='form-control' readonly value=<?php echo $row['id'] ?> />
                                       </div>
                                   </div>
                                   <!-- <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Order Type</label>
                                        <div class='col-md-6 col-xs-12'>                                            
                                           <input type='text' class='form-control' readonly value=''/>
                                        </div>
                                    </div> -->
                                    <?php }} ?>

                                   
                                    <?php
                                    if (mysql_num_rows($query)>0){
                                    while ($row1=mysql_fetch_array($query)){
                                        echo "
                                               <div class='form-group'>
                                                    <label class='col-md-3 col-xs-12 control-label'>User name</label>
                                                    <div class='col-md-6 col-xs-12'> ";
                                                    ?> 
                                                    <input type='text' class='form-control' readonly value=<?php echo $row1['name'];?> />
                                                    </div>
                                                </div>
                                                <div class='form-group'>
                                                     <label class='col-md-3 col-xs-12 control-label'>User email</label>
                                                     <div class='col-md-6 col-xs-12'>                                            
                                                       <input type='text' class='form-control' readonly value=<?php echo $row1['email'];?> />
                                                     </div>
                                                </div>
                                                <div class='form-group'>
                                                     <label class='col-md-3 col-xs-12 control-label'>User password</label>
                                                     <div class='col-md-6 col-xs-12'>                                            
                                                          <input type='text' class='form-control' readonly value=<?php echo $row1['password'];?> />
                                                     </div>
                                                </div>
                                    <?php }} ?>
                                
                    
                                    
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Current Rating-skills</label>
                                         <?php
                                            if (mysql_num_rows($query3)>0){
                                                while ($row3=mysql_fetch_array($query3)){
                                        ?>
                                        <div class='col-md-6 col-xs-12'>                                            
                                           <input type='text' class='form-control' readonly value=<?php echo $row3['csr'];?> />
                                        </div>
                                    </div>
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Desired Rating-skills</label>
                                        <div class='col-md-6 col-xs-12'>                                            
                                           <input type='text' class='form-control' readonly value=<?php echo $row3['dsr']; ?> />
                                        </div>
                                    </div>
                                    <?php }} ?>
                                
                                    
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Platform</label>
                                        <?php
                                            if (mysql_num_rows($query1)>0){
                                                while ($row2=mysql_fetch_array($query2)){
                                        ?>
                                        <div class='col-md-6 col-xs-12'>                                            
                                           <input type='text' class='form-control' readonly value=<?php echo $row2['platform'];?> />
                                        </div>
                                    </div>
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Region</label>
                                        <div class='col-md-6 col-xs-12'>                                            
                                            <input type='text' class='form-control' readonly value=<?php echo $row2['region'];?> />
                                        </div>
                                    </div>
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Heros</label>
                                        <div class='col-md-6 col-xs-12'> 
                                        <?php
                                         $data=$row2['heroes'];
                                         $cats = explode(",", $data);
                                         foreach($cats as $cat) {
                                            $cat = trim($cat);
                                        ?>
                                        <img src="../<?php echo $cat; ?>" style="height: 40px;">
                                        <?php } ?>                                           
                                           <!-- <input type='text' class='form-control' readonly value='Readonly value'/> -->
                                       </div>
                                    </div>
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Notes</label>
                                        <div class='col-md-6 col-xs-12'>                                            
                                            <input type='text' class='form-control' readonly value=<?php echo $row2['notes'] ?> />
                                        </div>
                                    </div>
                                    <div class='form-group'>
                                        <label class='col-md-3 col-xs-12 control-label'>Date</label>
                                        <div class='col-md-6 col-xs-12'>                                            
                                            <input type='text' class='form-control' readonly value=<?php echo $row2['added_on']; ?> />
                                        </div>
                                    </div>
                                     <?php }} ?>
                                     
                                    <!-- "; -->
                                    
                            
                            </div>
                        </div>
                        </form>
                    </div>
                </div>                      
            </div>
            <!-- END PAGE CONTENT WRAPPER -->                                                
        </div>            
        <!-- END PAGE CONTENT -->
    
        <!-- END PAGE CONTAINER -->
        
        <!-- MESSAGE BOX-->
        <!-- <div class="message-box animated fadeIn" data-sound="alert" id="mb-signout">
            <div class="mb-container">
                <div class="mb-middle">
                    <div class="mb-title"><span class="fa fa-sign-out"></span> Log <strong>Out</strong> ?</div>
                    <div class="mb-content">
                        <p>Are you sure you want to log out?</p>                    
                        <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
                    </div>
                    <div class="mb-footer">
                        <div class="pull-right">
                            <a href="pages-login.php" class="btn btn-success btn-lg">Yes</a>
                            <button class="btn btn-default btn-lg mb-control-close">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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
        
        <!-- THIS PAGE PLUGINS -->
        <script type='text/javascript' src='js/plugins/icheck/icheck.min.js'></script>
        <script type="text/javascript" src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
        
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-datepicker.js"></script>                
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-file-input.js"></script>
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-select.js"></script>
        <script type="text/javascript" src="js/plugins/tagsinput/jquery.tagsinput.min.js"></script>
        <!-- END THIS PAGE PLUGINS -->       
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->                   
    </body>
</html>


    






