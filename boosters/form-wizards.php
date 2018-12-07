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
                    <li class="active">Form Wizards</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Form Wizards</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">                
                
                    <div class="row">
                        <div class="col-md-12">

                            <!-- START DEFAULT WIZARD -->
                            <div class="block">
                                <h4>Default Wizard</h4>
                                <div class="wizard">

                                    <ul>
                                        <li>
                                            <a href="#step-1">
                                                <span class="stepNumber">1</span>
                                                <span class="stepDesc">Step 1<br /><small>Step 1 description</small></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#step-2">
                                                <span class="stepNumber">2</span>
                                                <span class="stepDesc">Step 2<br /><small>Step 2 description</small></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#step-3">
                                                <span class="stepNumber">3</span>
                                                <span class="stepDesc">Step 3<br /><small>Step 3 description</small></span>                   
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#step-4">
                                                <span class="stepNumber">4</span>
                                                <span class="stepDesc">Step 4<br /><small>Step 4 description</small></span>                   
                                            </a>
                                        </li>
                                    </ul>
                                    <div id="step-1">   
                                        <h4>Step 1 Content</h4>
                                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                    </div>
                                    <div id="step-2">
                                        <h4>Step 2 Content</h4>
                                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                    </div>                      
                                    <div id="step-3">
                                        <h4>Step 3 Content</h4>
                                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                    </div>
                                    <div id="step-4">
                                        <h4>Step 4 Content</h4>
                                        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                    </div>                           

                                </div>
                            </div>                                       
                            <!-- END DEFAULT WIZARD -->

                            <!-- START WIZARD WITH SUBMIT BUTTON -->
                            <div class="block">
                                <h4>Wizard With Submit</h4>                        
                                <form action="javascript:alert('Submited!');" role="form" class="form-horizontal">
                                <div class="wizard show-submit">                                
                                    <ul>
                                        <li>
                                            <a href="#step-5">
                                                <span class="stepNumber">1</span>
                                                <span class="stepDesc">User<br /><small>Personal data</small></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#step-6">
                                                <span class="stepNumber">2</span>
                                                <span class="stepDesc">Contact<br /><small>Information</small></span>
                                            </a>
                                        </li>                                    
                                    </ul>
                                    <div id="step-5">   

                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Name</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" placeholder="Your name"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">About</label>
                                            <div class="col-md-10">
                                                <textarea class="form-control" rows="5" placeholder="Something about you"></textarea>
                                            </div>
                                        </div>                                    

                                    </div>
                                    <div id="step-6">

                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Phone</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" placeholder="Your phone number"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">E-mail</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" placeholder="Your email"/>
                                            </div>
                                        </div>                                    
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Adress</label>
                                            <div class="col-md-5">
                                                <input type="text" class="form-control" placeholder="City"/>
                                            </div>
                                            <div class="col-md-5">
                                                <input type="text" class="form-control" placeholder="Street"/>
                                            </div>
                                        </div>                                                                        

                                    </div>                                                                                                            
                                </div>
                                </form>
                            </div>                        
                            <!-- END WIZARD WITH SUBMIT BUTTON -->

                            <!-- START WIZARD WITH VALIDATION -->
                            <div class="block">
                                <h4>Wizard with form validation</h4>                                
                                <form action="javascript:alert('Validated!');" role="form" class="form-horizontal" id="wizard-validation">
                                <div class="wizard show-submit wizard-validation">
                                    <ul>
                                        <li>
                                            <a href="#step-7">
                                                <span class="stepNumber">1</span>
                                                <span class="stepDesc">Login<br /><small>Information</small></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#step-8">
                                                <span class="stepNumber">2</span>
                                                <span class="stepDesc">User<br /><small>Personal data</small></span>
                                            </a>
                                        </li>                                    
                                    </ul>

                                    <div id="step-7">   

                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Login</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" name="login" placeholder="Login"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Password</label>
                                            <div class="col-md-10">
                                                <input type="password" class="form-control" name="password" placeholder="Password" id="password"/>
                                            </div>
                                        </div>             
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Re-Password</label>
                                            <div class="col-md-10">
                                                <input type="password" class="form-control" name="repassword" placeholder="Re-Password"/>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="step-8">

                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Name</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" name="name" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">E-mail</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" name="email" placeholder="Your email"/>
                                            </div>
                                        </div>                                    
                                        <div class="form-group">
                                            <label class="col-md-2 control-label">Adress</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" name="adress" placeholder="Your adress"/>
                                            </div>                                        
                                        </div>                                                     

                                    </div>                                                                                                            
                                </div>
                                </form>
                            </div>                        
                            <!-- END WIZARD WITH VALIDATION -->

                        </div>

                    </div>
                    
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
        
        <script type="text/javascript" src="js/plugins/smartwizard/jquery.smartWizard-2.0.min.js"></script>        
        <script type="text/javascript" src="js/plugins/jquery-validation/jquery.validate.js"></script>
        <!-- END PAGE PLUGINS -->
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->         
        
    </body>
</html>






