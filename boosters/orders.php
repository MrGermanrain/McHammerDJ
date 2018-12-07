<?php
error_reporting(0);
include('config.php');
if (isset($_GET['Proceed'])) 
{
    $proceed=$_GET['proceed'];
    $sql1=mysql_query("SELECT * FROM `skillboot` WHERE `id`='$proceed'");
    while ($row = mysqli_fetch_array($sql1)) {
        echo
        "
        <tr>
        <td>{$row['user_id']}</td>
        <td>{$row['skill']}</td>
        <td>{$row['rating']}</td>
        </tr>\n
        ";

}

    
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>        
        <!-- META SECTION -->
        <title>Booster's Panel</title>            
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
            
                            <?php include('header.php'); ?>
                    
                
                <!-- START BREADCRUMB -->
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tables</a></li>
                    <li class="active">Basic</li>
                </ul>
                <!-- END BREADCRUMB -->
                
                <!-- PAGE TITLE -->
                <div class="page-title">                    
                    <h2><span class="fa fa-arrow-circle-o-left"></span> Orders Table</h2>
                </div>
                <!-- END PAGE TITLE -->                
                
                <!-- PAGE CONTENT WRAPPER -->
                <div class="page-content-wrap">
                
                    
                    
                    <div class="row">
                        <div class="col-md-12">
                            
                            <!-- START DATATABLE EXPORT -->
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Orders Table </h3>
                                    <div class="btn-group pull-right">

                                        <button class="btn btn-danger dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars"></i> Export Data</button>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'json',escape:'false'});"><img src='img/icons/json.png' width="24"/> JSON</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});"><img src='img/icons/json.png' width="24"/> JSON (ignoreColumn)</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'json',escape:'true'});"><img src='img/icons/json.png' width="24"/> JSON (with Escape)</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'xml',escape:'false'});"><img src='img/icons/xml.png' width="24"/> XML</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'sql'});"><img src='img/icons/sql.png' width="24"/> SQL</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'csv',escape:'false'});"><img src='img/icons/csv.png' width="24"/> CSV</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'txt',escape:'false'});"><img src='img/icons/txt.png' width="24"/> TXT</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'excel',escape:'false'});"><img src='img/icons/xls.png' width="24"/> XLS</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'doc',escape:'false'});"><img src='img/icons/word.png' width="24"/> Word</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'powerpoint',escape:'false'});"><img src='img/icons/ppt.png' width="24"/> PowerPoint</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'png',escape:'false'});"><img src='img/icons/png.png' width="24"/> PNG</a></li>
                                            <li><a href="#" onClick ="$('#customers2').tableExport({type:'pdf',escape:'false'});"><img src='img/icons/pdf.png' width="24"/> PDF</a></li>
                                        </ul>
                                    </div>                                    
                                    
                                </div>
                                <div class="container">
                                    <div>
                                        <form action="" method="post" style="padding-top: 10px;">
                                            <select class="form-control select2" name="modules" style="width: 300px;" >
                                                <option value="">--- Select Order Type ---</option>
                                                <option value="skill">Skill Rating</option>
                                                <option value="sologames">Solo/Duo Games</option>
                                                <option value="anti">Anti Decay</option>
                                                <option value="prmigration">Placement Games</option>
                                            </select>
                                            <br>
                                            <button type="submit" name="sub" class="btn btn-primary  ">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div class="panel-body">

                                    <table id="customers2" class="table datatable">
                                        <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Order Type</th>
                                                <th>User Name</th>
                                                <th>User E-Mail-id</th>
                                                <th>Current Rating Skills</th>
                                                <th>Desired Rating Skills</th>
                                                <th>Button</th>
                                                <th>Code</th>
                                                <th>Payment Status</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                include('config.php');

                                                if (isset($_POST['sub'])) 
                                                {
                                                    $modules=$_POST['modules'];

                                                    $sql=mysql_query("SELECT * FROM $modules");
                                                    if (mysql_num_rows($sql)>0) 
                                                    {
                                                        $n=0;
                                                        while ($row=mysql_fetch_array($sql)) 
                                                        {
                                                               $n++;
                                                               $us_id=$row['user'];
                                            ?> 
                                            <tr>
                                                <td><?php echo $n; ?></td>
                                                <td><?php echo $modules; ?></td>
                                            <?php
                                            include('config.php');
                                            $us_id=$row['user'];
                                            $sql1=mysql_query("SELECT * FROM `register` WHERE `id`='$us_id'");
                                            if (mysql_num_rows($sql1)>0) 
                                            {
                                                while ($row1=mysql_fetch_array($sql1)) 
                                                {
                                            ?>
                                                <td><?php echo $row1['name']; ?></td>
                                                <?php $uiid=$row['id'];
                                                      $_SESSION['uiid']=$uiid;  
                                                ?>
                                                 
                                                <td><?php echo $row1['email']; $eml=$row1['email']; ?></td>

                                            <?php }} ?>    
                                                <td><?php echo $row['csr']; ?></td>
                                                <td><?php echo $row['dsr']; ?></td>
                                                <td><?php echo $row['button']; ?></td>
                                                <td><?php echo $row['code']; ?></td>
                                                <td>Success</td>
                                                <td><?php echo $row['date']; ?></td>
                                                <td><form method="post" action="userInfo.php">
                                                    <input type="hidden" name="usr_id" readonly value=<?php echo $us_id;?>>
                                                    <input type="submit"  name="" value="Proceed">
                                                </form></td>
                                            </tr>
                                            <?php }} } ?>
                                            
                                        </tbody>
                                    </table>                                    
                                    
                                </div>
                            </div>
                            <!-- END DATATABLE EXPORT -->                            
                            
                           

                        </div>
                    </div>

                </div>         
                <!-- END PAGE CONTENT WRAPPER -->
            </div>            
            <!-- END PAGE CONTENT -->
        </div>
        <!-- END PAGE CONTAINER -->    

        <!-- MESSAGE BOX-->
        <div class="message-box animated fadeIn" data-sound="alert" id="mb-remove-row">
            <div class="mb-container">
                <div class="mb-middle">
                    <div class="mb-title"><span class="fa fa-times"></span> Remove <strong>Data</strong> ?</div>
                    <div class="mb-content">
                        <p>Are you sure you want to remove this row?</p>                    
                        <p>Press Yes if you sure.</p>
                    </div>
                    <div class="mb-footer">
                        <div class="pull-right">
                            <button class="btn btn-success btn-lg mb-control-yes">Yes</button>
                            <button class="btn btn-default btn-lg mb-control-close">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END MESSAGE BOX-->        
        
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
        
        <script type="text/javascript" src="js/plugins/datatables/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="js/plugins/tableexport/tableExport.js"></script>
    <script type="text/javascript" src="js/plugins/tableexport/jquery.base64.js"></script>
    <script type="text/javascript" src="js/plugins/tableexport/html2canvas.js"></script>
    <script type="text/javascript" src="js/plugins/tableexport/jspdf/libs/sprintf.js"></script>
    <script type="text/javascript" src="js/plugins/tableexport/jspdf/jspdf.js"></script>
    <script type="text/javascript" src="js/plugins/tableexport/jspdf/libs/base64.js"></script>        
        <!-- END THIS PAGE PLUGINS-->  
        
        <!-- START TEMPLATE -->
        <script type="text/javascript" src="js/settings.js"></script>
        
        <script type="text/javascript" src="js/plugins.js"></script>        
        <script type="text/javascript" src="js/actions.js"></script>        
        <!-- END TEMPLATE -->
    <!-- END SCRIPTS -->                 
    </body>
</html>






