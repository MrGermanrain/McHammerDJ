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
                    <li class="active">UI Panels</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Panels</h2>
                </div>
                <!-- END PAGE TITLE -->                

                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">
                
                    <!-- START PANELS WITH CONTROLS -->
                    <div class="row">
                        <div class="col-md-6">

                            <!-- START PANEL WITH STATIC CONTROLS -->
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Panel with static controls</h3>
                                    <ul class="panel-controls">
                                        <li><a href="#" class="panel-fullscreen"><span class="fa fa-expand"></span></a></li>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></a>                                            
                                            <ul class="dropdown-menu">
                                                <li><a href="#" class="panel-collapse"><span class="fa fa-angle-down"></span> Collapse</a></li>
                                                <li><a href="#" class="panel-refresh"><span class="fa fa-refresh"></span> Refresh</a></li>
                                            </ul>                                        
                                        </li>
                                        <li><a href="#" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                    </ul>
                                </div>
                                <div class="panel-body">
                                    Controls always available
                                </div>      
                                <div class="panel-footer">
                                    <button class="btn btn-primary pull-right">Button</button>
                                </div>                            
                            </div>
                            <!-- END PANEL WITH STATIC CONTROLS -->

                            <!-- START PANEL WITH HIDDEN CONTROLS -->
                            <div class="panel panel-success panel-hidden-controls">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Panel with hidden controls</h3>
                                    <ul class="panel-controls">
                                        <li><a href="#" class="panel-fullscreen"><span class="fa fa-expand"></span></a></li>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></a>                                        
                                            <ul class="dropdown-menu">
                                                <li><a href="#" class="panel-collapse"><span class="fa fa-angle-down"></span> Collapse</a></li>
                                                <li><a href="#" class="panel-refresh"><span class="fa fa-refresh"></span> Refresh</a></li>
                                            </ul>                                        
                                        </li>
                                        <li><a href="#" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                    </ul>                                
                                </div>
                                <div class="panel-body">
                                    Use <code>.panel-hidden-controls</code> class on .panel to active this feature.
                                </div>      
                                <div class="panel-footer">                                
                                    <button class="btn btn-primary pull-right">Button</button>
                                </div>                            
                            </div>
                            <!-- END PANEL WITH HIDDEN CONTROLS -->

                            <!-- START PANEL WITH CONTROL CLASSES -->
                            <div class="panel panel-warning">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Panel control classes</h3>
                                    <ul class="panel-controls">
                                        <li><a href="#" class="panel-fullscreen"><span class="fa fa-expand"></span></a></li>
                                        <li><a href="#" class="panel-collapse"><span class="fa fa-angle-down"></span></a></li>
                                        <li><a href="#" class="panel-refresh"><span class="fa fa-refresh"></span></a></li>
                                        <li><a href="#" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                    </ul>                                
                                </div>
                                <div class="panel-body">
                                    Use <code>.panel-collapse</code>,<code>.panel-remove</code>,<code>.panel-refresh</code> classes inside panel to get all features.
                                </div>      
                                <div class="panel-footer">                                
                                    <button class="btn btn-primary pull-right">Button</button>
                                </div>                            
                            </div>
                            <!-- END PANEL WITH CONTROL CLASSES -->

                        </div>
                        <div class="col-md-6">

                            <!-- START PANEL WITH REFRESH CALLBACKS -->
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Panel refresh callbacks</h3>
                                </div>
                                <div class="panel-body">
                                    Refresh function has two event callbacks <code>shown</code> and <code>hidden</code>.
                                </div>
                                <div class="panel-footer">
                                    <button class="btn btn-default" id="pc_refresh">Refresh</button>
                                </div>                                                                                          
                            </div>
                            <!-- END PANEL WITH REFRESH CALLBACKS -->

                            <!-- START PANEL WITH COLLAPSE CALLBACKS -->
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Panel collapse callbacks</h3>
                                </div>
                                <div class="panel-body">
                                    Collapse function has two event callbacks <code>shown</code> and <code>hidden</code>.
                                </div>
                                <div class="panel-footer">
                                    <button class="btn btn-default" id="pc_collapse">Collapse</button>
                                </div>
                            </div>
                            <!-- END PANEL WITH REMOVE CALLBACKS -->

                            <!-- START PANEL WITH REMOVE CALLBACKS -->
                            <div class="panel panel-danger">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Panel remove callbacks</h3>
                                </div>
                                <div class="panel-body">
                                    Remove function has two event callbacks <code>before</code> and <code>after</code>.
                                </div>
                                <div class="panel-footer">                                
                                    <button class="btn btn-default" id="pc_remove">Remove</button>
                                </div>
                            </div>
                            <!-- END PANEL WITH REMOVE CALLBACKS -->

                        </div>                    
                    </div>
                    <!-- END PANELS WITH CONTROLS --> 

                    <!-- START SIMPLE PANELS -->                
                    <div class="row">                    
                        <div class="col-md-4">

                            <!-- START PRIMARY PANEL -->
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Primary</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Fusce imperdiet neque at lectus faucibus, eu dapibus nibh imperdiet. Cras porttitor magna ut justo iaculis feugiat. Aliquam semper in dolor nec mattis.</p>
                                    <p>Duis varius arcu in quam laoreet scelerisque. Aenean porta mi et massa congue, sit amet eleifend dui dignissim. Ut venenatis, tortor ac egestas fringilla, nisi mauris rhoncus nibh, facilisis lacinia mi ligula a est.</p>
                                </div>
                                <div class="panel-footer">
                                    <button class="btn btn-default">Back</button>
                                    <button class="btn btn-primary pull-right">Submit</button>
                                </div>                            
                            </div>
                            <!-- END PRIMARY PANEL -->

                            <!-- START COLORFUL PANEL -->
                            <div class="panel panel-colorful">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Colorful</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Fusce imperdiet neque at lectus faucibus, eu dapibus nibh imperdiet. Cras porttitor magna ut justo iaculis feugiat. Aliquam semper in dolor nec mattis.</p>
                                    <p>Duis varius arcu in quam laoreet scelerisque. Aenean porta mi et massa congue, sit amet eleifend dui dignissim. Ut venenatis, tortor ac egestas fringilla, nisi mauris rhoncus nibh, facilisis lacinia mi ligula a est.</p>
                                </div>
                                <div class="panel-footer">
                                    <button class="btn btn-default">Back</button>
                                    <button class="btn btn-primary pull-right">Submit</button>
                                </div>                            
                            </div>
                            <!-- END COLORFUL PANEL -->
                        </div>

                        <div class="col-md-4">  

                            <!-- START SUCCESS PANEL -->
                            <div class="panel panel-success">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Success</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Fusce imperdiet neque at lectus faucibus, eu dapibus nibh imperdiet. Cras porttitor magna ut justo iaculis feugiat. Aliquam semper in dolor nec mattis.</p>
                                    <p>Duis varius arcu in quam laoreet scelerisque. Aenean porta mi et massa congue, sit amet eleifend dui dignissim. Ut venenatis, tortor ac egestas fringilla, nisi mauris rhoncus nibh, facilisis lacinia mi ligula a est.</p>
                                </div>      
                                <div class="panel-footer">
                                    <button class="btn btn-default">Back</button>
                                    <button class="btn btn-primary pull-right">Submit</button>
                                </div>                            
                            </div>            
                            <!-- END SUCCESS PANEL -->

                            <!-- START INFO PANEL -->
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    <h3 class="panel-title">lorem ipsum dolor</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Fusce imperdiet neque at lectus faucibus, eu dapibus nibh imperdiet. Cras porttitor magna ut justo iaculis feugiat. Aliquam semper in dolor nec mattis.</p>
                                    <p>Duis varius arcu in quam laoreet scelerisque. Aenean porta mi et massa congue, sit amet eleifend dui dignissim. Ut venenatis, tortor ac egestas fringilla, nisi mauris rhoncus nibh, facilisis lacinia mi ligula a est.</p>
                                </div>                            
                                <div class="panel-footer">
                                    <button class="btn btn-default">Back</button>
                                    <button class="btn btn-primary pull-right">Submit</button>
                                </div>                              
                            </div>
                            <!-- END INFO PANEL -->

                        </div>
                        <div class="col-md-4">      

                            <!-- START WARNING PANEL -->
                            <div class="panel panel-warning">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Warning</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Fusce imperdiet neque at lectus faucibus, eu dapibus nibh imperdiet. Cras porttitor magna ut justo iaculis feugiat. Aliquam semper in dolor nec mattis.</p>
                                    <p>Duis varius arcu in quam laoreet scelerisque. Aenean porta mi et massa congue, sit amet eleifend dui dignissim. Ut venenatis, tortor ac egestas fringilla, nisi mauris rhoncus nibh, facilisis lacinia mi ligula a est.</p>
                                </div>     
                                <div class="panel-footer">
                                    <button class="btn btn-default">Back</button>
                                    <button class="btn btn-primary pull-right">Submit</button>
                                </div>                            
                            </div>                        
                            <!-- END DEFAULT PANEL -->

                            <!-- START DANGER PANEL -->
                            <div class="panel panel-danger">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Danger</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Fusce imperdiet neque at lectus faucibus, eu dapibus nibh imperdiet. Cras porttitor magna ut justo iaculis feugiat. Aliquam semper in dolor nec mattis.</p>
                                    <p>Duis varius arcu in quam laoreet scelerisque. Aenean porta mi et massa congue, sit amet eleifend dui dignissim. Ut venenatis, tortor ac egestas fringilla, nisi mauris rhoncus nibh, facilisis lacinia mi ligula a est.</p>
                                </div>     
                                <div class="panel-footer">
                                    <button class="btn btn-default">Back</button>
                                    <button class="btn btn-primary pull-right">Submit</button>
                                </div>                            
                            </div>   
                            <!-- END DEFAULT PANEL -->

                        </div>
                    </div>  
                    <!-- END SIMPLE PANELS -->                
                
                </div>
                <!-- PAGE CONTENT WRAPPER -->                                
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
        
        <!-- THIS PAGE PLUGINS -->
        <script type='text/javascript' src='js/plugins/icheck/icheck.min.js'></script>
        <script type="text/javascript" src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
        <!-- END PAGE PLUGINS -->        
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
        
        <script>
            $("#pc_refresh").click(function(){                                        
                function p_refresh_shown(){
                    alert("shown");
                    panel_refresh($("#pc_refresh").parents(".panel"),"hidden",function(){alert("hidden")});
                }
                panel_refresh($("#pc_refresh").parents(".panel"),"shown",p_refresh_shown);

            });                         
            
            $("#pc_collapse").click(function(){                                        
                function p_collapse_hidden(){                                            
                    alert("hidden");                                            
                    panel_collapse($("#pc_collapse").parents(".panel"),"shown",function(){alert('shown')});
                }
                panel_collapse($("#pc_collapse").parents(".panel"),"hidden",p_collapse_hidden);
            });           
            
            $("#pc_remove").click(function(){                                        
                function p_remove_before(){
                    alert("before");
                    panel_remove($("#pc_remove").parents(".panel"),"after",function(){alert("after")});
                }
                panel_remove($("#pc_remove").parents(".panel"),"before",p_remove_before);

            });                 
        </script>         
        
    <!-- END SCRIPTS -->         
        
    </body>
</html>






