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
                    <li class="active">WYSIWYG Editors</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> WYSIWYG Editors</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">                
                
                    <div class="row">
                        <div class="col-md-12">

                            <div class="block">
                                <h4>Summernote</h4>

                                    <p>Summernote also support Codemirror code preivew, check "Code View" mode.</p>
                                <textarea class="summernote"><h4>Also subhearder available too</h4>
<p><span style="font-weight: bold;">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Ut vel consequat massa. <span style="color: rgb(99, 0, 0); font-weight: bold;">Aliquam augue odio, vulputate non tempus et, sollicitudin in magna</span>. Sed dignissim, tellus sagittis varius vestibulum, erat sapien varius dolor, non elementum sem velit ut nunc. Sed gravida vehicula ipsum, sit amet auctor nunc ultricies et. <a href="http://#">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</a> <span style="font-style: italic;">Morbi dapibus massa faucibus</span>, euismod augue non, facilisis odio. In blandit consectetur nibh, eu venenatis ligula condimentum sed. Nullam magna velit, eleifend ut tincidunt sit amet, sagittis id ligula. Aenean eget metus auctor, fringilla nunc in, lacinia nisi. Suspendisse potenti. Suspendisse vel vulputate lectus.</p>
<blockquote><span style="text-decoration: underline;">
    Cras posuere scelerisque faucibus</span>. Fusce consectetur elit at nisi accumsan rutrum. Sed quis risus vel purus hendrerit mattis. In hac habitasse platea dictumst. Morbi volutpat justo in nunc tincidunt, sed auctor dui ullamcorper. <span style="color: rgb(41, 82, 24);">Praesent eleifend adipiscing nisi</span>. <a href="http://#">Aliquam mi elit, cursus nec posuere vel, varius in tortor</a>. Nullam fermentum nunc felis, sed varius ante auctor et.
</blockquote>
<p>Curabitur urna neque, pharetra vel felis commodo, dictum bibendum odio.<a href="http://#"> Suspendisse mauris augue</a>, volutpat vel augue in, pellentesque semper turpis. Donec congue, magna quis condimentum facilisis, dolor mauris suscipit enim, eu aliquam risus elit vel diam.</p>
                                

                                    </textarea>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Codemirror</h3>                               
                                </div>
                                <div class="panel-body">
<textarea id="codeEditor">
<?php
    class SomeClassName extends AnotherClassName{

        var $someVar,$anotherVar;
        var $someArray = array();

        private function __construct($id,$param1,$param2){
            $this->someVar    = $param1;
            $this->anotherVar = $param2;
            $this->someArray = $this->load_data($id);
        }

        public function build(){
            return (($this->someVar / $this->anotherVar) * $this->buffer) > 0 ? true : false ;
        }

        public function load_data($id){
            $data = array();

            $query = mysql_query("SELECT * FROM `base` WHERE `id`='".$this->int($id)."'");

            if(mysql_num_rows($query) > 0){
                while($row = mysql_fetch_array($query)) $data[] = $row['somecol'];                                
                return $data;    
            }else
                return false;
        }

        private function __destruct(){
            $this->someVar    = false;
            $this->anotherVar = false;
        }
    }
?></textarea>
                                
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
        
        <script type="text/javascript" src="js/plugins/codemirror/codemirror.js"></script>        
        <script type='text/javascript' src="js/plugins/codemirror/mode/htmlmixed/htmlmixed.js"></script>
        <script type='text/javascript' src="js/plugins/codemirror/mode/xml/xml.js"></script>
        <script type='text/javascript' src="js/plugins/codemirror/mode/javascript/javascript.js"></script>
        <script type='text/javascript' src="js/plugins/codemirror/mode/css/css.js"></script>
        <script type='text/javascript' src="js/plugins/codemirror/mode/clike/clike.js"></script>
        <script type='text/javascript' src="js/plugins/codemirror/mode/php/php.js"></script>    

        <script type="text/javascript" src="js/plugins/summernote/summernote.js"></script>
        <!-- END PAGE PLUGINS -->
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
        
        <script>
            var editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "application/x-httpd-php",
                indentUnit: 4,
                indentWithTabs: true,
                enterMode: "keep",
                tabMode: "shift"                                                
            });
            editor.setSize('100%','420px');
        </script>                
    <!-- END SCRIPTS -->
    </body>
</html>






