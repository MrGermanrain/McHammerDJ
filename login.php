<?php
include('config.php');

if (isset($_POST['submit'])) 
{
  session_start();
  $email=$_POST['email'];
  $pass=$_POST['password'];

  $sql=mysql_query("SELECT * FROM `register` WHERE `email`='$email' AND `password`='$pass'");

  if (mysql_num_rows($sql)) 
  {
    while ($row=mysql_fetch_array($sql)) 
    {
       $name= $row['name'];
       $_SESSION['user']=$name;
       $uid= $row['id'];
       $_SESSION['uid']=$uid; 
       header('location:indexa.php');
    }
  }
  else
  {
    echo mysql_error();
    header('location:login.php?error');
  }


}
?>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->


<html>
  <head>

  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
  </head>
<body id="LoginForm">
	
	<div class="container">
		<div class="login-form">
			<div class="main-div">
			    <div class="panel">

          <?php 

          if (isset($_REQUEST['error'])) {
            ?>
            <div class="alert alert-Danger alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>Sorry !</strong>Email Pass Wrong Try Again
</div>


            <?php
            
          }
            ?>
				   <h2>Login</h2>
				   <p>Please enter your email and password</p>
			   	</div>
			    <form action="" method="post">

			        <div class="form-group">
			            <input type="email" name="email" class="form-control" id="inputEmail" placeholder="Email Address">
			        </div>

			        <div class="form-group">
			            <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password">
			        </div>

			        <div class="forgot">
			        	<a href="reset.html">Forgot password?</a>
					</div>
			        <button type="submit" class="btn btn-primary" name="submit">Login</button>

			    </form>
			    <div>
			    	<a href="register.php" class="btn btn-info" style="width: 80px;">Sign In</a>
			    	<a href="index.php" class="btn btn-info" style="width: 80px; margin-left:110px;  ">Cancel</a>
			    </div>
			</div>
		</div>
	</div>



</body>
</html>
<style type="text/css">
	body#LoginForm{ background-image:url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg"); background-repeat:no-repeat; background-position:center; background-size:cover; padding:10px;}

.form-heading { color:#fff; font-size:23px;}
.panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
.panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}
.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  padding: 50px 70px 70px 71px;
}

.login-form .form-group {
  margin-bottom:10px;
}
.login-form{ text-align:center;}
.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}
.login-form  .btn.btn-primary {
  background: #f0ad4e none repeat scroll 0 0;
  border-color: #f0ad4e;
  color: #ffffff;
  font-size: 14px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0;
}
.forgot {
  text-align: left; margin-bottom:30px;
}
.botto-text {
  color: #ffffff;
  font-size: 14px;
  margin: auto;
}
.login-form .btn.btn-primary.reset {
  background: #ff9900 none repeat scroll 0 0;
}
.back { text-align: left; margin-top:10px;}
.back a {color: #444444; font-size: 13px;text-decoration: none;}

</style>