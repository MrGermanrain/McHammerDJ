<?php 
include('config.php');
session_start();
if (isset($_POST['sub'])) 
{
    $email=$_POST['email'];
    $password=$_POST['password'];

    $sql=mysql_query("SELECT * FROM `admin` WHERE `email`='$email' AND `password`='$password'");

    if (mysql_num_rows($sql)>0) 
    {
        while ($row=mysql_fetch_array($sql)) 
        {
            $name=$row['name'];
            $_SESSION['user']=$name;
            $user=$row['id'];
            $_SESSION['user_id']=$user;
            header('location:dashboard.php');
        }
    }
    else{
        echo mysql_error();
    }

}
?>
<!DOCTYPE html>
<html lang="en" class="body-full-height">
    <head>        
        <!-- META SECTION -->
        <title>Boosters Panel</title>            
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
        
        <div class="login-container">
        
            <div class="login-box animated fadeInDown">
                <div class="login-logo"></div>
                <div class="login-body">
                    <div class="login-title"><strong>Welcome</strong>, Please login</div>

                    <form action="" class="form-horizontal" method="post">
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="email" placeholder="Username"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="password" class="form-control" name="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-6">
                                <input type="submit" name="sub" value="LogIn" class="btn btn-info btn-block">
                            </div>
                        </div>
                    </form>

                </div>
                <div class="login-footer">
                    <div class="pull-left">
                        &copy; 2018 Boosting Gods
                    </div>
                    <div class="pull-right">
                        <a href="#">About</a> |
                        <a href="#">Privacy</a> |
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </body>
</html>






