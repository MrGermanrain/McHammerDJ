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
                    <li><a href="#">Pages</a></li>
                    <li class="active">Timeline</li>
                </ul>
                <!-- END BREADCRUMB -->                                                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">
                    
                    <div class="row">
                        <div class="col-md-6">
                            
                            <!-- START TIMELINE FILTER -->                            
                            <div class="panel panel-default">                                
                                <div class="panel-body">
                                    <h3>Timeline filter</h3>
                                    <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                                                                
                                        <div class="col-md-8">
                                            <div class="input-group">
                                                <span class="input-group-addon"><span class="fa fa-search"></span></span>
                                                <input type="text" class="form-control" placeholder="Keywords"/>
                                            </div>
                                        </div>    
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <span class="input-group-addon add-on"><span class="fa fa-calendar"></span></span>
                                                <input type="text" class="form-control datepicker" value="2014-10-06"/>                                                
                                            </div>                                            
                                        </div>
                                        
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-8">
                                            <div class="btn-group btn-group-justified">  
                                                <a href="#" class="btn btn-primary active">All</a>
                                                <a href="#" class="btn btn-primary">Year</a>
                                                <a href="#" class="btn btn-primary">Month</a>
                                                <a href="#" class="btn btn-primary">Week</a>
                                            </div>                                         
                                        </div>
                                        <div class="col-md-4">
                                            <div class="pull-right">
                                                <button class="btn btn-success"><span class="fa fa-refresh"></span> UPDATE</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <!-- END TIMELINE FILTER -->
                            
                        </div>
                        <div class="col-md-6">
                            
                            <!-- START NEW RECORD -->
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h3>What happened?</h3>
                                    <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                                <input class="form-control" placeholder="Write something"/>
                                            </div>                                                                                        
                                        </div>                                        
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="btn-group pull-left">
                                                <button class="btn btn-primary"><span class="fa fa-camera"></span></button>
                                                <button class="btn btn-primary"><span class="fa fa-map-marker"></span></button>
                                                <button class="btn btn-primary"><span class="fa fa-calendar"></span></button>
                                            </div>
                                            <div class="pull-right">
                                                <button class="btn btn-danger"><span class="fa fa-share"></span> SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <!-- END NEW RECORD -->
                            
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-12">
                            
                            <!-- START TIMELINE -->
                            <div class="timeline timeline-right">
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-main">
                                    <div class="timeline-date">2014</div>
                                </div>
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-item-right">
                                    <div class="timeline-item-info">Yesterday</div>
                                    <div class="timeline-item-icon"><span class="fa fa-globe"></span></div>
                                    <div class="timeline-item-content">
                                        <div class="timeline-heading">
                                            <img src="assets/images/users/user2.jpg"/> <a href="#">John Doe</a> added article <a href="#">Lorem ipsum dolor sit amet</a>
                                        </div>
                                        <div class="timeline-body">
                                            <img src="assets/images/gallery/nature-4.jpg" class="img-text" width="150" align="left"/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus dolor id orci lacinia, eget aliquam velit consequat.</p>
                                            <p>Vivamus at tincidunt lectus, faucibus condimentum quam. Duis facilisis sem sed eros malesuada, vel dignissim diam ornare. Etiam rhoncus, nibh non auctor mattis, ligula diam mattis dolor, non tincidunt lectus velit nec metus. 
                                               Phasellus dictum justo vitae ornare lobortis. Integer ut lectus vel mauris tempor ultricies eget vitae turpis. Sed eleifend odio quis rutrum volutpat.</p>
                                            <ul class="list-tags">                                            
                                                <li><a href="#"><span class="fa fa-tag"></span> tempor</a></li>
                                                <li><a href="#"><span class="fa fa-tag"></span> eros</a></li>
                                                <li><a href="#"><span class="fa fa-tag"></span> suspendisse</a></li>
                                                <li><a href="#"><span class="fa fa-tag"></span> dolor</a></li>
                                            </ul>                                            
                                        </div>
                                        <div class="timeline-body comments">
                                            <div class="comment-item">
                                                <img src="assets/images/users/user4.jpg"/>
                                                <p class="comment-head">
                                                    <a href="#">Brad Pitt</a> <span class="text-muted">@bradpitt</span>
                                                </p>
                                                <p>Awesome, man, that is awesome...</p>
                                                <small class="text-muted">10h ago</small>
                                            </div>                                            
                                            <div class="comment-write">                                                
                                                <textarea class="form-control" placeholder="Write a comment" rows="1"></textarea>                                                
                                            </div>
                                        </div>                                        
                                        <div class="timeline-footer">
                                            <a href="#">Read more</a>
                                            <div class="pull-right">
                                                <a href="#"><span class="fa fa-comment"></span> 35</a> 
                                                <a href="#"><span class="fa fa-share"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>       
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-item-right">
                                    <div class="timeline-item-info">29 Sep 2014</div>
                                    <div class="timeline-item-icon"><span class="fa fa-image"></span></div>
                                    <div class="timeline-item-content">
                                        <div class="timeline-heading">
                                            <img src="assets/images/users/user.jpg"/> <a href="#">Dmitry Ivaniuk</a> posted <a href="#">@Nature</a> images
                                        </div>
                                        <div class="timeline-body" id="links">                                            
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <a href="assets/images/gallery/nature-1.jpg" title="Nature Image 1" data-gallery>
                                                        <img src="assets/images/gallery/nature-1.jpg" class="img-responsive img-text"/>
                                                    </a>
                                                </div>
                                                <div class="col-md-4">
                                                    <a href="assets/images/gallery/nature-2.jpg" title="Nature Image 2" data-gallery>
                                                        <img src="assets/images/gallery/nature-2.jpg" class="img-responsive img-text"/>
                                                    </a>
                                                </div>
                                                <div class="col-md-4">
                                                    <a href="assets/images/gallery/nature-3.jpg" title="Nature Image 3" data-gallery>
                                                        <img src="assets/images/gallery/nature-3.jpg" class="img-responsive img-text"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline-body comments">
                                            <div class="comment-item">
                                                <img src="assets/images/users/user2.jpg"/>
                                                <p class="comment-head">
                                                    <a href="#">John Doe</a> <span class="text-muted">@johndoe</span>
                                                </p>
                                                <p>Amazing! Where did you get it?</p>
                                                <small class="text-muted">10h ago</small>
                                            </div>                                            
                                            <div class="comment-write">                                                
                                                <textarea class="form-control" placeholder="Write a comment" rows="1"></textarea>                                                
                                            </div>
                                        </div>                                                                                
                                    </div>
                                </div>                                
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-item-right">
                                    <div class="timeline-item-info">06 Oct 2014</div>
                                    <div class="timeline-item-icon"><span class="fa fa-star"></span></div>
                                    <div class="timeline-item-content">
                                        <div class="timeline-heading" style="padding-bottom: 10px;">
                                            <img src="assets/images/users/user2.jpg"/> 
                                            <a href="#">John Doe</a> joined group <a href="#">Web Developers</a>
                                        </div>     
                                        <div class="timeline-body comments">
                                            <div class="comment-item">
                                                <img src="assets/images/users/user.jpg"/>
                                                <p class="comment-head">
                                                    <a href="#">Dmitry Ivaniuk</a> <span class="text-muted">@Aqvatarius</span>
                                                </p>
                                                <p>You r welcome my friend :)</p>
                                                <small class="text-muted">5 min ago</small>
                                            </div>
                                            <div class="comment-item">
                                                <img src="assets/images/users/user2.jpg"/>
                                                <p class="comment-head">
                                                    <a href="#">John Doe</a> <span class="text-muted">@johndoe</span>
                                                </p>
                                                <p>Thank you, Dmitry!!! ;)</p>
                                                <small class="text-muted">1 min ago / to @Aqvatarius</small>
                                            </div>
                                            <div class="comment-write">                                                
                                                <textarea class="form-control" placeholder="Write a comment" rows="1"></textarea>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-item-right">
                                    <div class="timeline-item-info">5 Sep 2014</div>
                                    <div class="timeline-item-icon"><span class="fa fa-map-marker"></span></div>
                                    <div class="timeline-item-content">                                        
                                        <div class="timeline-body padding-0">
                                            <div id="google_ptm_map" style="width: 100%; height: 150px;"></div>
                                        </div>                         
                                        <div class="timeline-heading">
                                            <img src="assets/images/users/user2.jpg"/> <a href="#">John Doe</a> invite you to <a href="#">@Event</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-item-right">
                                    <div class="timeline-item-info">06 Oct 2014</div>
                                    <div class="timeline-item-icon"><span class="fa fa-users"></span></div>
                                    <div class="timeline-item-content">
                                        <div class="timeline-heading" style="padding-bottom: 10px;">
                                            <img src="assets/images/users/user3.jpg"/>
                                            <a href="#">Nadia Ali</a> added to friends 
                                            <img src="assets/images/users/user.jpg"/>
                                            <img src="assets/images/users/user2.jpg"/>
                                            <img src="assets/images/users/user4.jpg"/>
                                        </div>                                        
                                        <div class="timeline-body comments">
                                            <div class="comment-write">                                                
                                                <textarea class="form-control" placeholder="Write a comment" rows="1"></textarea>                                                
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>                                
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-main">
                                    <div class="timeline-date">2013</div>
                                </div>
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-item-right">
                                    <div class="timeline-item-info">30 Dec 2013</div>
                                    <div class="timeline-item-icon"><span class="fa fa-user"></span></div>
                                    <div class="timeline-item-content">
                                        <div class="timeline-heading padding-bottom-0" style="padding-bottom: 10px;">
                                            <img src="assets/images/users/user2.jpg"/>
                                            <a href="#">John Doe</a> update user image                                            
                                        </div>                                        
                                        <div class="timeline-body text-center">
                                            <img src="assets/images/users/user2.jpg" width="100" class="img-circle img-thumbnail"/>
                                        </div>
                                        <div class="timeline-body comments">
                                            <div class="comment-write">                                                
                                                <textarea class="form-control" placeholder="Write a comment" rows="1"></textarea>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- END TIMELINE ITEM -->
                                
                                <!-- START TIMELINE ITEM -->
                                <div class="timeline-item timeline-main">
                                    <div class="timeline-date"><a href="#"><span class="fa fa-ellipsis-h"></span></a></div>
                                </div>                                
                                <!-- END TIMELINE ITEM -->
                            </div>
                            <!-- END TIMELINE -->
                            
                        </div>
                    </div>
                    
                </div>
                <!-- END PAGE CONTENT WRAPPER -->                       
                                
            </div>            
            <!-- END PAGE CONTENT -->
        </div>
        <!-- END PAGE CONTAINER -->

        <!-- BLUEIMP GALLERY -->
        <div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">
            <div class="slides"></div>
            <h3 class="title"></h3>
            <a class="prev">‹</a>
            <a class="next">›</a>
            <a class="close">×</a>
            <a class="play-pause"></a>
            <ol class="indicator"></ol>
        </div>      
        <!-- END BLUEIMP GALLERY -->        
        
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
        
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>        
        <script type="text/javascript" src="js/plugins/blueimp/jquery.blueimp-gallery.min.js"></script>
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/plugins/bootstrap/bootstrap-select.js"></script>        
        <!-- END THIS PAGE PLUGINS-->        

        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>
        <script type="text/javascript" src="js/demo_maps.js"></script>
        <!-- END TEMPLATE -->
        
        <script>            
            document.getElementById('links').onclick = function (event) {
                event = event || window.event;
                var target = event.target || event.srcElement,
                    link = target.src ? target.parentNode : target,
                    options = {index: link, event: event,onclosed: function(){
                        setTimeout(function(){
                            $("body").css("overflow","");
                        },200);                        
                    }},
                    links = this.getElementsByTagName('a');
                blueimp.Gallery(links, options);
            };
        </script>        
        
    <!-- END SCRIPTS -->         
    </body>
</html>






