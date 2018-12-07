<?php 
include('config.php');
if (isset($_POST['submit'])) 
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$password=$_POST['password'];

	 $sql=mysql_query("INSERT INTO `register`(`name`, `email`, `password`, `added_on`, `status`) VALUES ('$name','$email','$password',NOW(),'0')");
    if ($sql) 
    {
       header('location:login.php');

    }
    else 
    {
        echo mysql_error();
    }

}

?>

<div class="container">
        <div class="row centered-form">
        <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div class="panel panel-default">
        		<div class="panel-heading">
			    	<h3 class="panel-title">Please Register for Boosting <small>It's free!</small></h3>
			 	</div>
			 	<div class="panel-body">
			    	<form action="" method="post">
			    			<div class="form-group">
			                	<input type="text" name="name" id="first_name" class="form-control input-sm" placeholder="Enter Name">
			    			</div>
			    			<div class="form-group">
			    				<input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address">
			    			</div>

			    			<div class="form-group">
			    				<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password">
			    			</div>


			    			
			    			<input type="submit" name="submit" value="Register" class="btn btn-info btn-block">
			    	</form>
	    		</div>
    		</div>
    		<div class="row">
			   	<div class="col-xs-6 col-sm-6 col-md-6"></div>
			  		<div class="col-xs-6 col-sm-6 col-md-6">
						<div class="col-xs-6 col-sm-6 col-md-6">
				    		<div class="form-group">
								<a href="login.php" class="btn btn-info btn-block" >LogIn</a>
		    				</div>
		    			</div>
			    		<div class="col-xs-6 col-sm-6 col-md-6">
		    				<div class="form-group">
								<a href="index.php" class="btn btn-info btn-block" >Cancel</a>	
		    				</div>
			   			</div>
			    	</div>
			    </div>
    		</div>

    </div>
    <style type="text/css">
    	body{
    background-image: url('new.png');
}
.centered-form{
	margin-top: 170px;
	margin-left: -80px;
}

.centered-form .panel{
	background: rgba(255, 255, 255, 0.8);
	box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
}

    </style>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->