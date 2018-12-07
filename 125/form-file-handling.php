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
                    <li class="active">File Handling</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> File Handling</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">
                
                    <div class="row">
                        <div class="col-md-8">

                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h3><span class="fa fa-mail-forward"></span> File Input</h3>
                                    <p>Add class <code>file</code> to file input to get Bootstrap FileInput plugin</p>                                    
                                    <form enctype="multipart/form-data" class="form-horizontal">                                        
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label>Default</label>
                                                <input type="file" multiple class="file" data-preview-file-type="any"/>
                                            </div>
                                            <div class="col-md-12">
                                                <label>Disabled</label>
                                                <input type="file" multiple readonly="true" class="file" data-preview-file-type="any"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label>Simple</label><br/>
                                                <input type="file" multiple id="file-simple"/>
                                            </div>                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-md-4">
                            
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h3><span class="fa fa-sitemap"></span> File Tree</h3>
                                    <p>File Tree is a configurable, AJAX file browser plugin for jQuery.</p>
                                    <div id="filetree"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-9">

                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h3><span class="fa fa-download"></span> Dropzone</h3>
                                    <p>Add form with class <code>dropzone</code> to get dropzone box</p>
                                    <form action="#" class="dropzone"></form>
                                </div>
                            </div>                        

                        </div> 

                        <div class="col-md-3">

                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h3><span class="fa fa-download"></span> Mini dropzone</h3>                                    
                                    <p>Add form with class <code>dropzone dropzone-mini</code> to get mini dropzone box</p>
                                    <form action="#" class="dropzone dropzone-mini"></form>
                                </div>
                            </div>

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
        
        <!-- THIS PAGE PLUGINS -->    
        <script type='text/javascript' src='js/plugins/icheck/icheck.min.js'></script>
        <script type="text/javascript" src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
        
        <script type="text/javascript" src="js/plugins/dropzone/dropzone.min.js"></script>
        <script type="text/javascript" src="js/plugins/fileinput/fileinput.min.js"></script>        
        <script type="text/javascript" src="js/plugins/filetree/jqueryFileTree.js"></script>
        <!-- END PAGE PLUGINS -->
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>
        <!-- END TEMPLATE -->
        
        <script>
            $(function(){
                $("#file-simple").fileinput({
                        showUpload: false,
                        showCaption: false,
                        browseClass: "btn btn-danger",
                        fileType: "any"
                });            
                $("#filetree").fileTree({
                    root: '/',
                    script: 'assets/filetree/jqueryFileTree.php',
                    expandSpeed: 100,
                    collapseSpeed: 100,
                    multiFolder: false                    
                }, function(file) {
                    alert(file);
                }, function(dir){
                    setTimeout(function(){
                        page_content_onresize();
                    },200);                    
                });                
            });            
        </script>
    <!-- END SCRIPTS -->         
        
    </body>
</html>






