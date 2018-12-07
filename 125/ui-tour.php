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
                <ul class="breadcrumb" id="tour-breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">UI Kits</a></li>
                    <li class="active">Tour</li>
                </ul>
                <!-- END BREADCRUMB -->

                <!-- PAGE TITLE -->
                <div class="page-title" id="trour-page-title">
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Tour</h2>
                </div>
                <!-- END PAGE TITLE -->                
               
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">                
                
                    <div class="row">
                        <div class="col-md-12">
                            
                            <!-- Bootstro.js Plugin -->
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Bootstro.js</h3>
                                </div>
                                <div class="panel-body">
                                    <p>Show your users a guided tour of what is what on a page. Especially, for first-time users. Use it with Bootstrap.</p>
                                    <button onclick="bootstro.start('.bootstro');" class="btn btn-danger">Start Tour</button>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-4 bootstro" data-bootstro-title="I can align to [left,right,bottom,top]" data-bootstro-content="Simply because I am a popover. Specify me with <b>data-bootstro-placement</b>" data-bootstro-placement="right" data-bootstro-width="400px" data-bootstro-step="3">
                                            <h4>Features</h4>
                                            <p><i class="icon-ok"></i> Works <b>cross-browser, cross-devices</b> . C'mon, it is bootstrap</p>
                                            <p><i class="icon-ok"></i> Utilises Bootstrap Popovers</p>
                                            <p><i class="icon-ok"></i> Small (<b>3.0K</b> minified JS &amp; <b>0.5K</b>  minified CSS)</p>
                                            <p><i class="icon-ok"></i> <b>No collision</b>. Everything safely namespaced to bootstro.
                                            All <b>events unbinded</b> when the intro stops</p>
                                        </div>

                                        <div class="col-md-4 bootstro" data-bootstro-title="I am simple" data-bootstro-content="Call bootstro.start('.bootstro') or just <b>bootstro.start()</b>" data-bootstro-step="1">
                                            <h4>More features </h4>
                                            <p><i class="icon-ok"></i> <b>Any element anywhere </b> on the page can be intro'ed: popovers are automatically scrolled to so they always get focused</p>
                                            <p><i class="icon-ok"></i> <b>Easily customizable</b>: Bootstro provides various public methods so you can control as you like bootstro.start(), bootstro.next(), bootstro.prev()...</p>
                                            <p class="bootstro" data-bootstro-step="6" data-bootstro-content="I work with Esc, → ↓, ← ↑ keyboard shortcuts too">
                                            <i class="icon-ok"></i> <b>Keyboard shortcuts</b>: Works with Esc, → ↓, ← ↑ shortcuts too</p>
                                            <p class="bootstro" data-bootstro-step="8" data-bootstro-content="Slideshow can be loaded via ajax">
                                            <i class="icon-ok"></i> <b>Show can be alternativly loaded via ajax</b>: This way the page HTML can be kept clean, 
                                            and server also can decide which elements to show more easily,or translate the show more easily. Try it</p>
                                        </div>

                                        <div class="col-md-4 bootstro" data-bootstro-title="I can resize my width too" data-bootstro-content="By adding <b>data-bootstro-width</b> attribute" data-bootstro-width="600px" data-bootstro-step="2">
                                            <h4>Quick Usage</h4>
                                            <p><i class="icon-ok"></i> Bootstro requires bootstrap &amp; bootstrap popover</p>
                                            <p><i class="icon-ok"></i> Add class <b>.bootstro</b> to any element that you'd like to be highlighted</p>
                                            <p><i class="icon-ok"></i> Include bootstro.js &amp; bootstro.css</p>  
                                            <p><i class="icon-ok"></i> bootstro.start()</p>

                                            <h5>Why?</h5>
                                            <p>As part of building a sortof open KhanAcademy clone using our home grown SandPHP framework, I developed a working but spaghetti version of 
                                            Bootstro.js a few weeks ago (I called it live_onpage_help() then). But after seeing HN's  excitement on intro.js 2 days ago, I thought Bootstrap lovers might love Bootstro.js as well. 
                                            </p>
                                            <p>So I decided to spend the weekend customizing &amp; advancing my work into a separate reusable proper tiny utility.</p>
                                        </div>
                                    </div>                                

                                </div>                           
                            </div>                        
                            <!-- END Bootstro.js Plugin -->
                            
                            <!-- Bootstrap Tour Plugin -->
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Bootstrap-tour.js</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <p>This tour plugin based on Bootstrap, and using as default Bootstrap Popover. Also this plugin can be used without Bootstrap.</p>
                                            <button class="btn btn-danger start-tour push-down-10">Start Tour</button>                                        
                                        </div>
                                        <div class="col-md-4" id="tour-content-1">
                                            <h4>Heading h4</h4>
                                            <p><strong>In quis tincidunt sem</strong>. Vestibulum risus quam, bibendum et eleifend eget, finibus vel felis. Nam viverra est neque. Suspendisse eget mauris non quam venenatis porta non a eros. Donec posuere, lorem ut commodo elementum, lectus erat maximus massa, <strong>vitae vehicula arcu</strong> lectus ac dolor.</p>
                                        </div>
                                        <div class="col-md-4" id="tour-content-2">
                                            <h4>Heading h4</h4>
                                            <p>Vivamus ac rhoncus felis. Phasellus tincidunt consectetur dapibus. <strong>Nulla at tortor sed lectus lacinia vehicula</strong>. Phasellus non ex quis purus facilisis viverra et vitae ex. <strong>Ut tempor condimentum blandit</strong>.</p>
                                        </div>
                                    </div>

                                </div>                           
                            </div>
                            <!-- END Bootstrap Tour Plugin -->
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
        
        <script type="text/javascript" src="js/plugins/tour/bootstrap-tour.min.js"></script>        
        <script type="text/javascript" src="js/plugins/tour/bootstro.min.js"></script>
        <!-- END PAGE PLUGINS -->        
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->         
        
    <script>
        $(function(){
            var tour = new Tour({
                debug: true,
                storage: false,                
                steps: [
                {
                  element: "#tour-sidebar",
                  title: "Sidebar Navigation",
                  content: "It's very powerful tool in template. It has many options and features.",
                  placement: "right"
                },
                {
                  element: "#tour-top-navigation",
                  title: "Top Navigation",
                  content: "Used as panel, but it also can be used as navigation with drop-down menu",
                  placement: "bottom"
                },
                {
                  element: "#tour-content-1",
                  title: "Content Example",
                  content: "Sample of left direction of popover block",
                  placement: "left"
                },
                {
                  element: "#tour-content-2",
                  title: "Content Example 2",
                  content: "Sample of top direction of popover block",
                  placement: "top"
                }
              ]});              
              //tour1.init();      
              $(".start-tour").on("click",function(){
                  tour.start();
              });
        });
        
    </script>
    
    </body>
</html>






