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
                <ul class="breadcrumb push-down-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Mailbox</a></li>
                    <li class="active">Inbox</li>
                </ul>
                <!-- END BREADCRUMB -->                
                                
                <!-- START CONTENT FRAME -->
                <div class="content-frame">                                    
                    <!-- START CONTENT FRAME TOP -->
                    <div class="content-frame-top">                        
                        <div class="page-title">                    
                            <h2><span class="fa fa-inbox"></span> Inbox <small>(3 unread)</small></h2>
                        </div>                                                                                
                        
                        <div class="pull-right">                            
                            <button class="btn btn-default"><span class="fa fa-cogs"></span> Settings</button>
                            <button class="btn btn-default content-frame-left-toggle"><span class="fa fa-bars"></span></button>
                        </div>                        
                    </div>
                    <!-- END CONTENT FRAME TOP -->
                    
                    <!-- START CONTENT FRAME LEFT -->
                    <div class="content-frame-left">
                        <div class="block">
                            <a href="pages-mailbox-compose.php" class="btn btn-danger btn-block btn-lg"><span class="fa fa-edit"></span> COMPOSE</a>
                        </div>
                        <div class="block">
                            <div class="list-group border-bottom">
                                <a href="#" class="list-group-item active"><span class="fa fa-inbox"></span> Inbox <span class="badge badge-success">3</span></a>
                                <a href="#" class="list-group-item"><span class="fa fa-star"></span> Starred <span class="badge badge-warning">6</span></a>
                                <a href="#" class="list-group-item"><span class="fa fa-rocket"></span> Sent</a>
                                <a href="#" class="list-group-item"><span class="fa fa-flag"></span> Flagged</a>
                                <a href="#" class="list-group-item"><span class="fa fa-trash-o"></span> Deleted <span class="badge badge-default">1.4k</span></a>                            
                            </div>                        
                        </div>
                        <div class="block">
                            <h4>Labels</h4>
                            <div class="list-group list-group-simple">                                
                                <a href="#" class="list-group-item"><span class="fa fa-circle text-success"></span> Clients</a>
                                <a href="#" class="list-group-item"><span class="fa fa-circle text-warning"></span> Social</a>
                                <a href="#" class="list-group-item"><span class="fa fa-circle text-danger"></span> Work</a>
                                <a href="#" class="list-group-item"><span class="fa fa-circle text-info"></span> Family</a>
                                <a href="#" class="list-group-item"><span class="fa fa-circle text-primary"></span> Friends</a>
                            </div>
                        </div>
                    </div>
                    <!-- END CONTENT FRAME LEFT -->
                    
                    <!-- START CONTENT FRAME BODY -->
                    <div class="content-frame-body">
                        
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <label class="check mail-checkall">
                                    <input type="checkbox" class="icheckbox"/>
                                </label>
                                <div class="btn-group">
                                    <button class="btn btn-default"><span class="fa fa-mail-reply"></span></button>
                                    <button class="btn btn-default"><span class="fa fa-mail-reply-all"></span></button>
                                    <button class="btn btn-default"><span class="fa fa-mail-forward"></span></button>
                                </div>
                                <div class="btn-group">
                                    <button class="btn btn-default"><span class="fa fa-star"></span></button>                                    
                                    <button class="btn btn-default"><span class="fa fa-flag"></span></button>
                                </div>                                
                                <button class="btn btn-default"><span class="fa fa-warning"></span></button>
                                <button class="btn btn-default"><span class="fa fa-trash-o"></span></button>                                                                    
                                <div class="pull-right" style="width: 150px;">
                                    <div class="input-group">
                                        <div class="input-group-addon"><span class="fa fa-calendar"></span></div>
                                        <input class="form-control datepicker" type="text" data-orientation="left"/>                                    
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body mail">
                                
                                <div class="mail-item mail-unread mail-info">                                    
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Dmitry Ivaniuk</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">Product development</a>                                    
                                    <div class="mail-date">Today, 11:21</div>
                                </div>
                                
                                <div class="mail-item mail-unread mail-danger">                                    
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">John Doe</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">New Windows 9 App</a>                                    
                                    <div class="mail-date">Today, 10:36</div>
                                </div>
                                
                                <div class="mail-item mail-success">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Nadia Ali</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">Check my new song</a>                                    
                                    <div class="mail-date">Yesterday, 20:19</div>
                                </div>
                                
                                <div class="mail-item mail-warning">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star starred">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Brad Pitt</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">How are you? Need some work?</a>                                    
                                    <div class="mail-date">Sep 15</div>
                                </div>
                                
                                <div class="mail-item mail-info">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Dmitry Ivaniuk</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">Can you check this docs?</a>                                    
                                    <div class="mail-date">Sep 14</div>
                                    <div class="mail-attachments">
                                        <span class="fa fa-paperclip"></span> 11Kb
                                    </div>
                                </div>
                                
                                <div class="mail-item">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star starred">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">HTC</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">New updates on your phone HD7</a>
                                    <div class="mail-date">Sep 13</div>
                                    <div class="mail-attachments">
                                        <span class="fa fa-paperclip"></span> 58Mb
                                    </div>
                                </div>
                                
                                <div class="mail-item mail-unread">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Unknown</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">You won $15,000,000</a>
                                    <div class="mail-date">Sep 13</div>
                                </div>
                                
                                <div class="mail-item mail-success">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Nadia Ali</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">Your tickets</a>
                                    <div class="mail-date">Sep 11</div>
                                    <div class="mail-attachments">
                                        <span class="fa fa-paperclip"></span> 1.2Mb
                                    </div>
                                </div>
                                
                                <div class="mail-item mail-info">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Dmitry Ivaniuk</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">New bug founded</a>
                                    <div class="mail-date">Sep 11</div>
                                </div>
                                
                                <div class="mail-item">
                                    <div class="mail-checkbox">
                                        <input type="checkbox" class="icheckbox"/>
                                    </div>
                                    <div class="mail-star">
                                        <span class="fa fa-star-o"></span>
                                    </div>
                                    <div class="mail-user">Darth Vader</div>                                    
                                    <a href="pages-mailbox-message.php" class="mail-text">Where drawings of the new spaceship?</a>
                                    <div class="mail-date">Sep 10</div>
                                </div>                                
                                
                            </div>
                            <div class="panel-footer">                                
                                <div class="btn-group">
                                    <button class="btn btn-default"><span class="fa fa-mail-reply"></span></button>
                                    <button class="btn btn-default"><span class="fa fa-mail-reply-all"></span></button>
                                    <button class="btn btn-default"><span class="fa fa-mail-forward"></span></button>
                                </div>
                                <div class="btn-group">
                                    <button class="btn btn-default"><span class="fa fa-star"></span></button>                                    
                                    <button class="btn btn-default"><span class="fa fa-flag"></span></button>
                                </div>
                                
                                <button class="btn btn-default"><span class="fa fa-warning"></span></button>
                                <button class="btn btn-default"><span class="fa fa-trash-o"></span></button>                                    
                                
                                <ul class="pagination pagination-sm pull-right">
                                    <li class="disabled"><a href="#">«</a></li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>                                    
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>                            
                        </div>
                        
                    </div>
                    <!-- END CONTENT FRAME BODY -->
                </div>
                <!-- END CONTENT FRAME -->
                
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
        
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-datepicker.js"></script>     
        <!-- END THIS PAGE PLUGINS-->        

        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->         
    </body>
</html>






