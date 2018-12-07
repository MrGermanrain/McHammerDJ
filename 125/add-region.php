<?php
if (isset($_POST['submit'])) 
{
    include('include/config.php');
    $region=$_POST['region'];

    $sql=mysql_query("INSERT INTO `region`(`region_name`, `added_on`, `status`) VALUES ('$region',NOW(),'0')");
    if ($sql) 
    {
        echo "<script> alert ('Region Added Successfully'); </script>";
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
        <!-- EOF CSS INCLUDE -->                 
    </head>
    <body>
        <!-- START PAGE CONTAINER -->
        <div class="page-container">
            
             <?php include('include/header.php'); ?>
                  
                
                <!-- START BREADCRUMB -->
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Forms Stuff</a></li>
                    <li class="active">Form Elements</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Add Regions</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">
                
                    <div class="row">
                        <div class="col-md-6">

                            <!-- START DEFAULT FORM ELEMENTS -->
                            <div class="block">
                                <form action="" method="post">                                    
                                                                      
                                    <div class="form-group">
                                        <div class="col-md-9">                                                                                
                                            <div class="form-group" style="margin-left: 50px;">
                                                <label class="col-md-2 control-label">Region </label>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control" placeholder="Enter Region Name" name="region"><br>
                                                    <input type="submit" value="Add Region" class="btn btn-info" name="submit">
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </form>                                                                                        
                            </div>

                        </div>

                    </div>
                    
                </div>
                <!-- END PAGE CONTENT WRAPPER -->                                                
        </div>            
            <!-- END PAGE CONTENT -->
        <!-- END PAGE CONTAINER -->
        
        <!-- MESSAGE BOX-->
       
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
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-timepicker.min.js"></script>
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-colorpicker.js"></script>
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






