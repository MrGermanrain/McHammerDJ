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
                    <li><a href="#">UI Kits</a></li>
                    <li class="active">Sliders</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Sliders</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">                
                
                    <div class="row">
                        <div class="col-md-12">

                            <!-- START RANGE SLIDER -->
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Range Slider</h3>
                                    <ul class="panel-controls">
                                        <li><a href="#" class="panel-collapse"><span class="fa fa-angle-down"></span></a></li>
                                        <li><a href="#" class="panel-refresh"><span class="fa fa-refresh"></span></a></li>
                                        <li><a href="#" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                    </ul>                                
                                </div>                            
                                <div class="panel-body">
                                    <form role="form" class="form-horizontal">
                                        <div class="form-group">
                                            <label class="control-label col-md-2">Default</label>
                                            <div class="col-md-10">
                                                <div class="defaultSlider" data-min="20" data-max="180"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-2">Date slider</label>
                                            <div class="col-md-10">
                                                <div class="dateSlider" data-min="2010-01-01" data-max="2015-01-01"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-2">Range</label>
                                            <div class="col-md-10">
                                                <div class="rangeSlider" data-min="80" data-max="120"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-2">Step</label>
                                            <div class="col-md-10">
                                                <div class="stepSlider" data-min="50" data-max="150"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- END RANGE SLIDER -->

                            <!-- START KNOB SLIDER -->
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Knob Slider</h3>
                                    <ul class="panel-controls">
                                        <li><a href="#" class="panel-collapse"><span class="fa fa-angle-down"></span></a></li>
                                        <li><a href="#" class="panel-refresh"><span class="fa fa-refresh"></span></a></li>
                                        <li><a href="#" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                    </ul>                                
                                </div>                            
                                <div class="panel-body">

                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            <h5>Disable display input</h5>
                                            <input class="knob" data-width="150" data-fgColor="#33414E" data-displayInput=false value="35"/>                                        
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <h5>'cursor' mode</h5>
                                            <input class="knob" data-width="150" data-cursor=true data-fgColor="#81C500" value="29"/>                                        
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <h5>Display previous value</h5>
                                            <input class="knob" data-width="150" data-min="-100" data-fgColor="#FD421C" data-displayPrevious=true value="44"/>
                                        </div>
                                    </div>                                                                    

                                    <div class="row">
                                        <div class="col-md-4 text-center">
                                            <h5>Angle offset</h5>
                                            <input class="knob" data-width="150" data-angleOffset="90" data-linecap="round" data-fgColor="#61C0E6" value="35"/>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <h5>Angle offset and arc</h5>
                                            <input class="knob" data-width="150" data-cursor=true data-fgColor="#FEC558" value="29"/>                                        
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <h5>5-digit values, step 1000</h5>
                                            <input class="knob" data-width="150" data-min="-15000" data-displayPrevious=true data-max="15000" data-step="1000" value="-11000" data-fgColor="#81C500"/>                                         
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- END KNOB SLIDER -->                        

                        </div>
                    </div>

                </div>
                <!-- END PAGE CONTENT WRAPPER -->                                    
            </div>    
            <!-- END PAGE CONTENT -->
        </div>
        <!-- END PAGE CONTAINER -->

        <!-- MESSAGE BOX-->
        <div class="message-box animated fadeIn" data-sound="alert" id="mb-signout">
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
        
        <script type="text/javascript" src="js/plugins/rangeslider/jQAllRangeSliders-min.js"></script>       
        <script type="text/javascript" src="js/plugins/knob/jquery.knob.min.js"></script>
        <!-- END THIS PAGE PLUGINS-->      
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>                
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->         
        
    </body>
</html>






