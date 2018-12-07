<?php 
session_start();

if (!isset($_SESSION['user'])) {

header('location:index.php');
    
}
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="page-sidebar">
                <!-- START X-NAVIGATION -->
                <ul class="x-navigation">
                    <li class="xn-logo">
                        <a href="dashboard.php">Joli Admin</a>
                        <a href="#" class="x-navigation-control"></a>
                    </li>
                    <li class="xn-profile">
                        <a href="#" class="profile-mini">
                            <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
                        </a>
                        <div class="profile">
                            <div class="profile-image">
                                <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
                            </div>
                            <div class="profile-data">
                                <div class="profile-data-name">John Doe</div>
                                <div class="profile-data-title">Web Developer/Designer</div>
                            </div>
                            <div class="profile-controls">
                                <a href="pages-profile.php" class="profile-control-left"><span class="fa fa-info"></span></a>
                                <a href="pages-messages.php" class="profile-control-right"><span class="fa fa-envelope"></span></a>
                            </div>
                        </div>                                                                        
                    </li>
                    <li class="xn-title">Navigation</li>
                    <li class="active">
                        <a href="dashboard.php"><span class="fa fa-desktop"></span> <span class="xn-text">Dashboard</span></a>                        
                    </li>
                    <li>
                        <a href="demo.php"><span class="fa fa-user-circle-o"></span> <span class="xn-text">Demo Users</span></a>                        
                    </li>
                    
                    
                    <li>
                        <a href="orders.php"><span class="fa fa-shopping-cart"></span> <span class="xn-text">Orders</span></a>                        
                    </li>
                    
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-map-marker"></span> Region</a>
                        <ul>
                            <li><a href="add-region.php"><span class="fa fa-plus"></span> Add Region</a></li>
                            <li><a href="view-region.php"><span class="fa fa-eye"></span> view Region</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="chat.php"><span class="fa fa-comments-o"></span> <span class="xn-text">Chat</span></a>                        
                    </li>
                                        
                    <!-- <li class="xn-openable">
                        <a href="#"><span class="fa fa-pencil"></span> <span class="xn-text">Forms</span></a>
                        <ul>
                            <li>
                                <a href="form-layouts-two-column.php"><span class="fa fa-tasks"></span> Form Layouts</a>
                                <div class="informer informer-danger">New</div>
                                <ul>
                                    <li><a href="form-layouts-one-column.php"><span class="fa fa-align-justify"></span> One Column</a></li>
                                    <li><a href="form-layouts-two-column.php"><span class="fa fa-th-large"></span> Two Column</a></li>
                                    <li><a href="form-layouts-tabbed.php"><span class="fa fa-table"></span> Tabbed</a></li>
                                    <li><a href="form-layouts-separated.php"><span class="fa fa-th-list"></span> Separated Rows</a></li>
                                </ul> 
                            </li>
                            <li><a href="form-elements.php"><span class="fa fa-file-text-o"></span> Elements</a></li>
                            <li><a href="form-validation.php"><span class="fa fa-list-alt"></span> Validation</a></li>
                            <li><a href="form-wizards.php"><span class="fa fa-arrow-right"></span> Wizards</a></li>
                            <li><a href="form-editors.php"><span class="fa fa-text-width"></span> WYSIWYG Editors</a></li>
                            <li><a href="form-file-handling.php"><span class="fa fa-floppy-o"></span> File Handling</a></li>
                        </ul>
                    </li>
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-files-o"></span> <span class="xn-text">Pages</span></a>
                        <ul>
                            <li><a href="pages-gallery.php"><span class="fa fa-image"></span> Gallery</a></li>
                            <li><a href="pages-profile.php"><span class="fa fa-user"></span> Profile</a></li>
                            <li><a href="pages-address-book.php"><span class="fa fa-users"></span> Address Book</a></li>
                            <li class="xn-openable">
                                <a href="#"><span class="fa fa-clock-o"></span> Timeline</a>
                                <ul>
                                    <li><a href="pages-timeline.php"><span class="fa fa-align-center"></span> Default</a></li>
                                    <li><a href="pages-timeline-simple.php"><span class="fa fa-align-justify"></span> Full Width</a></li>
                                </ul>
                            </li>
                            <li class="xn-openable">
                                <a href="#"><span class="fa fa-envelope"></span> Mailbox</a>
                                <ul>
                                    <li><a href="pages-mailbox-inbox.php"><span class="fa fa-inbox"></span> Inbox</a></li>
                                    <li><a href="pages-mailbox-message.php"><span class="fa fa-file-text"></span> Message</a></li>
                                    <li><a href="pages-mailbox-compose.php"><span class="fa fa-pencil"></span> Compose</a></li>
                                </ul>
                            </li>
                            <li><a href="pages-messages.php"><span class="fa fa-comments"></span> Messages</a></li>
                            <li><a href="pages-calendar.php"><span class="fa fa-calendar"></span> Calendar</a></li>
                            <li><a href="pages-tasks.php"><span class="fa fa-edit"></span> Tasks</a></li>
                            <li><a href="pages-content-table.php"><span class="fa fa-columns"></span> Content Table</a></li>
                            <li><a href="pages-faq.php"><span class="fa fa-question-circle"></span> FAQ</a></li>
                            <li><a href="pages-search.php"><span class="fa fa-search"></span> Search</a></li>
                            <li class="xn-openable">
                                <a href="#"><span class="fa fa-file"></span> Blog</a>
                                
                                <ul>                                    
                                    <li><a href="pages-blog-list.php"><span class="fa fa-copy"></span> List of Posts</a></li>
                                    <li><a href="pages-blog-post.php"><span class="fa fa-file-o"></span>Single Post</a></li>
                                </ul>
                            </li>
                            <li class="xn-openable">
                                <a href="#"><span class="fa fa-sign-in"></span> Login</a>
                                <ul>                                    
                                    <li><a href="pages-login.php">App Login</a></li>
                                    <li><a href="pages-login-website.php">Website Login</a></li>
                                    <li><a href="pages-login-website-light.php"> Website Login Light</a></li>
                                </ul>
                            </li>
                            <li class="xn-openable">
                                <a href="#"><span class="fa fa-warning"></span> Error Pages</a>
                                <ul>                                    
                                    <li><a href="pages-error-404.php">Error 404 Sample 1</a></li>
                                    <li><a href="pages-error-404-2.php">Error 404 Sample 2</a></li>
                                    <li><a href="pages-error-500.php"> Error 500</a></li>
                                </ul>
                            </li>                            
                        </ul>
                    </li>
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-file-text-o"></span> <span class="xn-text">Layouts</span></a>
                        <ul>
                            <li><a href="layout-boxed.php">Boxed</a></li>
                            <li><a href="layout-nav-toggled.php">Navigation Toggled</a></li>
                            <li><a href="layout-nav-top.php">Navigation Top</a></li>
                            <li><a href="layout-nav-right.php">Navigation Right</a></li>
                            <li><a href="layout-nav-top-fixed.php">Top Navigation Fixed</a></li>                            
                            <li><a href="layout-nav-custom.php">Custom Navigation</a></li>
                            <li><a href="layout-frame-left.php">Frame Left Column</a></li>
                            <li><a href="layout-frame-right.php">Frame Right Column</a></li>
                            <li><a href="layout-search-left.php">Search Left Side</a></li>
                            <li><a href="blank.php">Blank Page</a></li>
                        </ul>
                    </li>
                    <li class="xn-title">Components</li>
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-cogs"></span> <span class="xn-text">UI Kits</span></a>                        
                        <ul>
                            <li><a href="ui-widgets.php"><span class="fa fa-heart"></span> Widgets</a></li>                            
                            <li><a href="ui-elements.php"><span class="fa fa-cogs"></span> Elements</a></li>
                            <li><a href="ui-buttons.php"><span class="fa fa-square-o"></span> Buttons</a></li>                            
                            <li><a href="ui-panels.php"><span class="fa fa-pencil-square-o"></span> Panels</a></li>
                            <li><a href="ui-icons.php"><span class="fa fa-magic"></span> Icons</a><div class="informer informer-warning">+679</div></li>
                            <li><a href="ui-typography.php"><span class="fa fa-pencil"></span> Typography</a></li>
                            <li><a href="ui-portlet.php"><span class="fa fa-th"></span> Portlet</a></li>
                            <li><a href="ui-sliders.php"><span class="fa fa-arrows-h"></span> Sliders</a></li>
                            <li><a href="ui-alerts-popups.php"><span class="fa fa-warning"></span> Alerts & Popups</a></li>                            
                            <li><a href="ui-lists.php"><span class="fa fa-list-ul"></span> Lists</a></li>
                            <li><a href="ui-tour.php"><span class="fa fa-random"></span> Tour</a></li>
                        </ul>
                    </li>                    
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-pencil"></span> <span class="xn-text">Forms</span></a>
                        <ul>
                            <li>
                                <a href="form-layouts-two-column.php"><span class="fa fa-tasks"></span> Form Layouts</a>
                                <div class="informer informer-danger">New</div>
                                <ul>
                                    <li><a href="form-layouts-one-column.php"><span class="fa fa-align-justify"></span> One Column</a></li>
                                    <li><a href="form-layouts-two-column.php"><span class="fa fa-th-large"></span> Two Column</a></li>
                                    <li><a href="form-layouts-tabbed.php"><span class="fa fa-table"></span> Tabbed</a></li>
                                    <li><a href="form-layouts-separated.php"><span class="fa fa-th-list"></span> Separated Rows</a></li>
                                </ul> 
                            </li>
                            <li><a href="form-elements.php"><span class="fa fa-file-text-o"></span> Elements</a></li>
                            <li><a href="form-validation.php"><span class="fa fa-list-alt"></span> Validation</a></li>
                            <li><a href="form-wizards.php"><span class="fa fa-arrow-right"></span> Wizards</a></li>
                            <li><a href="form-editors.php"><span class="fa fa-text-width"></span> WYSIWYG Editors</a></li>
                            <li><a href="form-file-handling.php"><span class="fa fa-floppy-o"></span> File Handling</a></li>
                        </ul>
                    </li>
                    <li class="xn-openable">
                        <a href="tables.php"><span class="fa fa-table"></span> <span class="xn-text">Tables</span></a>
                        <ul>                            
                            <li><a href="table-basic.php"><span class="fa fa-align-justify"></span> Basic</a></li>
                            <li><a href="table-datatables.php"><span class="fa fa-sort-alpha-desc"></span> Data Tables</a></li>
                            <li><a href="table-export.php"><span class="fa fa-download"></span> Export Tables</a></li>                            
                        </ul>
                    </li>
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-bar-chart-o"></span> <span class="xn-text">Charts</span></a>
                        <ul>
                            <li><a href="charts-morris.php"><span class="xn-text">Morris</span></a></li>
                            <li><a href="charts-nvd3.php"><span class="xn-text">NVD3</span></a></li>
                            <li><a href="charts-rickshaw.php"><span class="xn-text">Rickshaw</span></a></li>
                            <li><a href="charts-other.php"><span class="xn-text">Other</span></a></li>
                        </ul>
                    </li>                    
                    <li>
                        <a href="maps.php"><span class="fa fa-map-marker"></span> <span class="xn-text">Maps</span></a>
                    </li>                    
                    <li class="xn-openable">
                        <a href="#"><span class="fa fa-sitemap"></span> <span class="xn-text">Navigation Levels</span></a>
                        <ul>                            
                            <li class="xn-openable">
                                <a href="#">Second Level</a>
                                <ul>
                                    <li class="xn-openable">
                                        <a href="#">Third Level</a>
                                        <ul>
                                            <li class="xn-openable">
                                                <a href="#">Fourth Level</a>
                                                <ul>
                                                    <li><a href="#">Fifth Level</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>                            
                        </ul>
                    </li> -->
                    
                </ul>
                <!-- END X-NAVIGATION -->
            </div>
            
            <div class="page-content">
                
                <ul class="x-navigation x-navigation-horizontal x-navigation-panel">
                    <!-- TOGGLE NAVIGATION -->
                    <li class="xn-icon-button">
                        <a href="#" class="x-navigation-minimize"><span class="fa fa-dedent"></span></a>
                    </li>
                    <!-- END TOGGLE NAVIGATION -->
                    <!-- SEARCH -->
                    <li class="xn-search">
                        <form role="form">
                            <input type="text" name="search" placeholder="Search..."/>
                        </form>
                    </li>   
                    <!-- END SEARCH -->
                    <!-- SIGN OUT -->
                    <li class="xn-icon-button pull-right">
                        <a href="logout.php" ><span class="fa fa-sign-out"></span></a>                        
                    </li> 
                    <!-- END SIGN OUT -->
                    <!-- MESSAGES -->
                    <li class="xn-icon-button pull-right">
                        <a href="#"><span class="fa fa-comments"></span></a>
                        <div class="informer informer-danger">
                            
<?php  
include 'include/config.php';

$sql_in= mysql_query("SELECT * FROM msg where u_type ='user' AND `status`='0' ");
$n='0';
  while ($r=mysql_fetch_array($sql_in)) {
     $n++;
}
echo $n;
    ?>


                        </div>
                        <div class="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
                            <div class="panel-heading">
                                <h3 class="panel-title"><span class="fa fa-comments"></span> Messages</h3>                                
                                <div class="pull-right">
                                </div>
                            </div>
                            <div class="panel-body list-group list-group-contacts scroll" style="height: 200px;">
                                 
<?php  
include 'include/config.php';

$sql_in= mysql_query("SELECT * FROM msg where u_type ='user' AND `status`='0'");
  while ($r=mysql_fetch_array($sql_in)) {

    ?>

                                <a href="chats.php?uid=<?php echo $r['user_id']; ?>" class="list-group-item">
                                    <div class="list-group-status status-online"></div>
                                    <span class="contacts-title"><?php echo $r['msg']; ?></span>
                                </a>
                                <?php
                            }
                                ?>
                               
                            </div>     
                            <div class="panel-footer text-center">
                                <a href="pages-messages.php">Show all messages</a>
                            </div>                            
                        </div>                        
                    </li>
                    <!-- END MESSAGES -->
                    <!-- TASKS -->
                    <li class="xn-icon-button pull-right">
                        <a href="#"><span class="fa fa-tasks"></span></a>
                        <div class="informer informer-warning">3</div>
                        <div class="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
                            <div class="panel-heading">
                                <h3 class="panel-title"><span class="fa fa-tasks"></span> Tasks</h3>                                
                                <!-- <div class="pull-right">
                                    <span class="label label-warning">3 active</span>
                                </div> -->
                            </div>
                            <div class="panel-body list-group scroll" style="height: 200px;">                                
                                <a class="list-group-item" href="#">
                                    <strong>Phasellus augue arcu, elementum</strong>
                                    <div class="progress progress-small progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div>
                                    </div>
                                    <small class="text-muted">John Doe, 25 Sep 2014 / 50%</small>
                                </a>
                                <a class="list-group-item" href="#">
                                    <strong>Aenean ac cursus</strong>
                                    <div class="progress progress-small progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">80%</div>
                                    </div>
                                    <small class="text-muted">Dmitry Ivaniuk, 24 Sep 2014 / 80%</small>
                                </a>
                                <a class="list-group-item" href="#">
                                    <strong>Lorem ipsum dolor</strong>
                                    <div class="progress progress-small progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;">95%</div>
                                    </div>
                                    <small class="text-muted">John Doe, 23 Sep 2014 / 95%</small>
                                </a>
                                <a class="list-group-item" href="#">
                                    <strong>Cras suscipit ac quam at tincidunt.</strong>
                                    <div class="progress progress-small">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div>
                                    </div>
                                    <small class="text-muted">John Doe, 21 Sep 2014 /</small><small class="text-success"> Done</small>
                                </a>                                
                            </div>     
                            <div class="panel-footer text-center">
                                <a href="pages-tasks.php">Show all tasks</a>
                            </div>                            
                        </div>                        
                    </li>
                    <!-- END TASKS -->
                </ul>