<?php 
session_start();

?>
<!DOCTYPE html>
<html lang="en">
  <head>
            <script>
   function eraseText() {
    document.getElementById("output").value = "";
}
                function fnChangeBorder(boxId){ document.getElementById(boxId).style.border = "solid #AA00FF";
}
                function fnclearchoices(boxId){ document.getElementById(boxId).style.border="none";
                    
                }
      function fnChangeBorder(btnId){ document.getElementById(btnId).style.border = "solid #AA00FF";
}            
                
                
      </script>
      
    <meta charset="UTF-8">
    <title>Single Product</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    </head>

<style type="text/css">
    
body{
  background-color: cadetblue;
}
.navbar-inverse .navbar-brand {
    color: #fff;
}
.navbar-inverse .navbar-nav>li>a {
    color: #fff;
}
#heading{
text-align: center;
/*margin-left: 500px;*/
color: #fff;
font-family: arial;

}
.alert-success{
width: 75%;
margin-left: 200px;
}
#but1{
  margin-left: 130px;
  padding: 5px 30px;
  background-color: darkyellow;
  color: #fff;
  border-radius: 50px;
  margin-bottom: 5px;
}
#but2{
border-radius: 50px;
padding:10px 0px; 
margin:30px 0px;
}
.derik{
  margin: 0px 0px;
}
.derik label{
  margin-left: 153px;
  font-size: 20px;
  font-weight: 600;
}
ul li{
  display: inline-table;
  margin-left: 80px;
}
#gma{
  padding: 10px 20px;
  background-color: #404040;
  color: #fff;
  font:15px;
  font-weight: 600;
  border-radius: 50px;
}
i{
  color:;
  margin-right:5px;
}
#but4{
  margin-left: 200px;
  padding: 10px 100px;
  border-radius: 40px; 
}
#pc,#xbox, #ps4{
  padding: 10px 40px;
  color: #333;
  border-radius: 30px;

}
#pc,#ps4{
  background-color: lightgrey;

}
#xbox{
  background-color: #18ce0f;
    box-shadow: 5px 5px 10px #aba8a8;
}
.plat{
  margin-left: 170px;
}
.plat1 option
{
  padding: 20px 300px;
}
#email{
  padding: 20px 60px;
  text-align: left;
  border-radius: 50px;
}
.box{

}
    .table td tr{
        border:1px solid white;
    }
    
.section {
    padding: 70px 0;
    position: relative;
    background: #fff;
    margin: 100px;
}

.nav ul li{
    display: inline;
}
.navbar-nav{
   margin-left:460px;

}
.navbar-nav .nav-item{
    margin-left: 50px;
    font-size: 20px;
}
.navbar-nav .nav-item li:hover{
    margin-left: 50px;
    font-size: 20px;
    background-color: #fff;
    
}
    
</style>
<body style="background-image: url(1.png)">

    <nav class="navbar navbar-expand-sm" style="background-color:#193366; height:120px" >
 
  <a class="navbar-brand" href="#">
    <img src="img/BG_Text.png" alt="logo" height="120px" width="120px" style="margin-left:50px" >
  </a>
  
  <ul class="navbar-nav navbar-right pull-right" style="margin-top:40px ;margin-right: 130px">
    <li class="nav-item">
      <a class="nav-link" href="indexa.php" style="color: White">Boosting</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="index.php"style="color: White"><i class="fa fa-user" style="color: White"></i><span>&nbsp;Demo</span></a>
    </li>
    <?php 
    include('config.php');
    if (isset($_SESSION['user'])) 
    {
      ?>
      <li class="nav-item">
        <a class="nav-link" href="#" style="color: White"><span class="fa fa-user-o" style="color: White" ></span>&nbsp;<?php echo $_SESSION['user']; ?></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="logout.php" style="color: White"><span class="fa fa-sign-in" style="color: White" ></span>&nbsp;Logout</a>
      </li>
   <?php }
   else{
    ?>
    <li class="nav-item">
      <a class="nav-link" href="login.php" style="color: White"><span class="fa fa-sign-in" style="color: White" ></span>&nbsp;Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="register.php" style="color: White"><span class="fa fa-sign-in" style="color: White" ></span>&nbsp;Sign Up</a>
    </li>
  <?php } ?>
  </ul>
</nav>
<h1 id="heading">Demo Page</h1>
    <div class="container-fluid">
<div class="col-md-10" style="height: 40px ; background-color: lightgreen ; text-align: center ; margin-bottom: 20px ; margin-left: 105px ; margin-right: 50px">
  <strong style="font-size: 25px ; margin-top: 5px" >Success!</strong> <span style="font-size: 20px ;margin-top: 5px" >Indicates a successful or positive action</span>
</div>
        </div>

<div class="container box" >

  <div class="row" >
    <div class="col-lg-4">

      <div class="row" style="margin-left: 10px">
        <div class="panel panel-default" >
          <div class="panel-heading">
            <h3 class="panel-title" style="text-align:center;">Skill Rating Boot</h3>
        </div>
          <div class="panel-body" style="padding:20px;">
            <div class="row">
              <?php
                include('config.php');
                $idu=$_SESSION['uid'];
                 $dv="SELECT * FROM `skill` WHERE `user`='$idu' ORDER BY `id` DESC LIMIT 1 ";
                $sl=mysql_query($dv);

                if (mysql_num_rows($sl)>0) 
                    {
                      while ($ew=mysql_fetch_array($sl)) 
                      {
                       ?>
                                <div class="col-lg-4" style="text-align:center">Start:<br><?php echo $x= $ew['csr']; ?><br>
                                  <img src="Images/3%20(2).jpg" style=""/>
                                </div>
                       <?php
                        } 
                      }?>


                      <?php
                include('config.php');
                $idu=$_SESSION['uid'];

                $sl=mysql_query("SELECT * FROM `skillboot` WHERE `user_id`='$idu' ORDER BY `id` DESC LIMIT 1 ");

                if (mysql_num_rows($sl)>0) 
                    {
                      while ($ew=mysql_fetch_array($sl)) 
                      {
                       ?>
                                <div class="col-lg-4" style="text-align:center">Current:<br><?php echo  $y= $ew['rating']; ?><br>
                          <img src="Images/3%20(3).jpg"/> 
                        </div>
                       <?php
                        } 
                      }?>

                      

                      <?php
                include('config.php');
                $idu=$_SESSION['uid'];

                $sl=mysql_query("SELECT * FROM `skill` WHERE `user`='$idu' ORDER BY `id` DESC LIMIT 1 ");

                if (mysql_num_rows($sl)>0) 
                    {
                      while ($ew=mysql_fetch_array($sl)) 
                      {
                       ?>
                          
                      <div class="col-lg-4" style="text-align:center">Desired:<br><?php echo $z= $ew['dsr']; ?><br>
                        <img src="Images/3%20(1).jpg"/>
                      </div>
                       <?php
                        } 
                      }
                      ?>

                      
            </div>
          </div>
          <?php
          $c=$y;

            if ($c=='0') {
              $a='0';
            }
            else{
              $a=$c;

              $prog= ($a*100)/$z;
               $prog=round($prog, 2);;
            }


                include('config.php');
                $idu=$_SESSION['uid'];

                $sl=mysql_query("SELECT * FROM `skillboot` WHERE `user_id`='$idu' ORDER BY `id` DESC LIMIT 1 ");

                if (mysql_num_rows($sl)>0) 
                    {
                      while ($ew=mysql_fetch_array($sl)) 
                      {
                ?>        

         
        <div class="progress" style="margin-top: 30px;">
          <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar"
          aria-valuenow="<?php echo $prog; ?>" aria-valuemin="0" aria-valuemax="100" style="width:<?php echo $prog; ?>% ; background-color: #337ab7">
            <?php echo $prog; ?> % Complete 
          </div>
        </div>
        <button id="but2" type="button" class="btn btn-primary btn-block" style="background-color: #337ab7 ; border: none ; width: 300px;margin-left: 30px ; margin-top: -5px"  >Pause</button> 
          <div class="panel-heading">
            <h4 class="panel-title" style="text-align:center; color:grey;">Updated On <?php echo $ew['added_on']; ?></h4>
          </div>
        <?php }} ?>
        </div>
      </div>

      <div class="row" style="margin-left: 10px">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" style="text-align:center;">Stream</h3>
        </div>
        <button id="but2" type="button" class="btn btn-primary btn-block" style="background-color: #337ab7 ; border: none ; width: 300px;margin-left: 30px"  >Start Watching </button>  
          <div class="panel-heading">
            <h4 class="panel-title" style="text-align:center; color:grey;">Updated 6 hours Ago</h4>
        </div>
      </div>
      </div>

      <div class="row"  style="margin-left: 10px">
        <div class="panel panel-default" style="height: 225px">
          <div class="panel-heading">
            <h3 class="panel-title" style="text-align:center;">Booster</h3>
        </div>
        <div class="derik padd " >
        <label><h3 style="margin-left: -20px ; margin-top: -20px">Deirk027</h3></label>
        <button id="but2" type="button" class="btn btn-primary btn-block" style="background-color: #337ab7 ; border: none ; width: 300px;margin-left: 10px "  >Tip Booster</button></div> 
          <div class="panel-heading" style="margin-top: -28px">
            <h4 class="panel-title" style="text-align:center; color:grey">Updated 6 hours Ago</h4>
        </div>
      </div>
      </div>


      <div class="row" style="margin-left: 10px">
        <div class="panel panel-default" style="margin-bottom: 75px">
          <div class="panel-heading ">
            <h3 class="panel-title" style="text-align:center;">Booster</h3>
        </div>
        
              
            <table class="table table-striped padd">
              <thead>
                <tr>
                  <th>Order No</th>
                  <th>Order Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <?php

                $uiid=$_SESSION['uid'];
                include('config.php');
                   $slq=mysql_query("SELECT * form anti  WHERE user = '$uiid' ORDER BY id desc");
                  if (mysql_num_rows($slq)>0) 
                  {
                    while ($rew=mysql_fetch_array($slq)) 
                    {
                ?>

                <tr>
                  <td>SB-001<?php echo $rew['id']; ?></td>
                  <td><?php echo $rew['added_on']; ?></td>
                  <td><a href="#" style="#337ab7">view details</a></td>
                </tr>
                <?php
                 }}
                  ?>
              
              </tbody>
            </table><br>

  
          <div class="panel-heading">
            <h4 class="panel-title" style="text-align:center; color:grey;">Updated 6 hours Ago</h4>
        </div>
      </div>
      </div>


    </div>





        <script>
        
        function mainbtn() {
    document.getElementById("1").style.backgroundColor = "Black";
            document.getElementById("1").style.color = "White";
    document.getElementById("2").style.backgroundColor = "lightgray";
            document.getElementById("2").style.color = "Black";
    document.getElementById("3").style.backgroundColor = "lightgray";
            document.getElementById("3").style.color = "Black";
}
                 function mainbtn1() {
    document.getElementById("2").style.backgroundColor = "Black";
            document.getElementById("2").style.color = "White";
    document.getElementById("1").style.backgroundColor = "lightgray";
                    document.getElementById("1").style.color = "Black"; 
    document.getElementById("3").style.backgroundColor = "lightgray";
                     document.getElementById("3").style.color = "Black";
}
                 function mainbtn2() {
   document.getElementById("3").style.backgroundColor = "Black";
                     document.getElementById("3").style.color = "White";
    document.getElementById("1").style.backgroundColor = "lightgray";
                     document.getElementById("1").style.color = "Black";
    document.getElementById("2").style.backgroundColor = "lightgray";
document.getElementById("2").style.color = "Black";
                 }
        
        </script>











    <div class="col-lg-8">

    <div class="panel panel-default" style="margin-right: 20px">
          <div class="panel-heading">
              <div style="margin-left: 150px">
                <a data-toggle="tab" href="#home"><button id="1" style="width: 160px ;height: 45px; border-radius: 50px ;color: black ; font-size: 18px ; background-color: lightgray"onclick="mainbtn()"><i class="fa fa-gear"></i>Game Setting</button></a>
                <a data-toggle="tab" href="#menu1"><button id="2" style="width: 130px ;height: 45px; border-radius: 50px;color: black;font-size: 18px; background-color: lightgray" onclick="mainbtn1()"><i class="fa fa-users"></i>Hero</button></a>
                <a data-toggle="tab" href="#menu2"><button  id="3"  style="width: 160px ;height: 45px; border-radius: 50px;color: black;font-size: 18px; background-color: lightgray" onclick="mainbtn2()"><i class="fa fa-sticky-note"></i>Notes</button></a>
              </div>
          </div>
        
          <div class="tab-content">
                  
          <div id="home" class="tab-pane fade in active"> 
            <div class="derik" id = "Gameaccount">
                <p class="description" style="margin-top: 20px ; text-align: center">
                    It is not possible to edit your account details after we have started working on your order 
                </p>
            </div>
            
            
          
            <style type="text/css">
  
                  .switch-field input {
                      position: absolute !important;
                      clip: rect(0, 0, 0, 0);
                      height: 1px;
                      width: 1px;
                      border: 0;
                      overflow: hidden;
                  }

                  .switch-field label {
                    display: inline-block;
                    width: 120px;
                    height: 45px;
                    background-color: #e4e4e4;
                    color: rgba(0, 0, 0, 0.6);
                    font-size: 14px;
                    font-weight: normal;
                    text-align: center;
                    text-shadow: none;
                    border-radius: 25px;
                    padding: 6px 14px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
                    -webkit-transition: all 0.1s ease-in-out;
                    -moz-transition:    all 0.1s ease-in-out;
                    -ms-transition:     all 0.1s ease-in-out;
                    -o-transition:      all 0.1s ease-in-out;
                    transition:         all 0.1s ease-in-out;
                  }

                  .switch-field input:checked + label {
                    border-radius: 25px;
                    background-color: #A5DC86;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                  }

                  .switch-field label:first-of-type {
                    border-radius:25px;
                  }

                  .switch-field label:last-of-type {
                    border-radius: 25px;
                  }
                      
            </style>
<form action="account.php" method="post">
                <div class="plat" style="align:center ; margin-left: 200px">
                    <h3 style="margin-left:120px ; color:grey;">Platform</h3>
                    <div class="switch-field">
                      <input type="radio" id="switch_3_left" name="platform" value="pc" checked/>
                      <label for="switch_3_left">PC</label>
                      <input type="radio" id="switch_3_center" name="platform" value="xbox" />
                      <label for="switch_3_center">XBOX</label>
                      <input type="radio" id="switch_3_right" name="platform" value="ps4" />
                      <label for="switch_3_right">PS4</label>
                    </div>
                </div>
            <div class="btn-group">
                            
                <select class="form-control select2" name="region" style="width: 340px; height: 50px; margin-left: 200px ;margin-top: 35px; " >
                  <option value="">--- Select Region Type ---</option>
                  <?php
                                            include('config.php');

                                            $sql=mysql_query("SELECT * FROM `region` ORDER BY added_on DESC");
                                            if (mysql_num_rows($sql)>0) 
                                            {
                                                while ($row=mysql_fetch_array($sql)) 
                                                {
                                                  
                                            ?>
                      
                      <option value="<?php echo $row['region_name']; ?>"><?php echo ucfirst($row['region_name']); ?></option>
                       <?php }} ?>
                </select>
           
            </div>    
        
     
    
            <div class="plat" style="width:400px;">
              <h3 style="margin-left: 150px; color:grey;">Account</h3>
                        
              <div class="input-group form-control">
                  <span class="frmina"><i class="glyphicon glyphicon-envelope"></i></span>
                  <input id="email" type="email" class="frnin" name="email" placeholder="Email">
              </div>
              <div class="input-group form-control">
                  <span class=" frmina"><i class="fa fa-key"></i></span>
                  <input id="email" type="password" class="frnin" name="pass" placeholder="Password">
              </div>
            </div>
                
            <div class="panel-footer">
                <a data-toggle="tab" href="#menu1">
                  <button id="2" class="panel-title btns btn-primary btn-block" style="text-align:center; width:330px; color:#fff;background-color: #337ab7; margin-left: 200px" onclick="mainbtn1()">Submit</button></a>


          
              
            </div> 
          


          </div>


    <div id="menu1" class="tab-pane fade">
        
        <div class="derik" id = "Gameaccount">
             <div class="row">
                                                    <div class="col-0 col-sm-1 col-md-2"></div>
                                                    <div class="col-12 col-sm-10 col-md-8">
                                                        <p class="description" style="margin-top: 20px">
                                                            Please select at least 6 heroes. If you won't select any then our booster will choose heroes to play by himself.</p>
                                                    </div>
                                                    <div class="col-0 col-sm-1 col-md-2"></div>
                                              </div>

           
 <div class="heroes-row mb-2">
  <div style="float: left ; margin-left:80px"> <img src="Images/2%20(3).png" height="50" width="50"> </div>
     <table align = "center">
  <tr>
      <th></th>

        <li><input type="checkbox" id="cb1" name="cbx[]" value="Images/1%20(1).png"  />
            <label for="cb1"><img src="Images/1%20(1).png" /></label>
        </li> 
        <li><input type="checkbox" id="cb2" name="cbx[]" value="Images/1%20(2).png"  />
            <label for="cb2"><img src="Images/1%20(2).png" /></label>
        </li>
        <li><input type="checkbox" id="cb3" name="cbx[]" value="Images/1%20(3).png"  />
            <label for="cb3"><img src="Images/1%20(3).png" /></label>
        </li>
        <li><input type="checkbox" id="cb4" name="cbx[]" value="Images/1%20(4).png"  />
            <label for="cb4"><img src="Images/1%20(4).png" /></label>
        </li>
        <li><input type="checkbox" id="cb5" name="cbx[]" value="Images/1%20(5).png"  />
            <label for="cb5"><img src="Images/1%20(5).png" /></label>
        </li>
        <li><input type="checkbox" id="cb6" name="cbx[]" value="Images/1%20(6).png"  />
            <label for="cb6"><img src="Images/1%20(6).png" /></label>
        </li>
        <li><input type="checkbox" id="cb7" name="cbx[]" value="Images/1%20(7).png"  />
            <label for="cb7"><img src="Images/1%20(7).png" /></label>
        </li>
        <li><input type="checkbox" id="cb8" name="cbx[]" value="Images/1%20(8).png"  />
            <label for="cb8"><img src="Images/1%20(8).png" /></label>
        </li>
        
  </tr>
         
</table>
<style type="text/css">
  .hro img{
margin-left: 100px;

  }

</style>

    
      <li class="hro"><input type="checkbox" id="cb9" name="cbx[]" value="Images/1%20(9).png"  />
            <label for="cb9"><img src="Images/1%20(9).png" /></label>
        </li> 
        <li><input type="checkbox" id="cb10" name="cbx[]" value="Images/1%20(10).png"  />
            <label for="cb10"><img src="Images/1%20(10).png" /></label>
        </li>
        <li><input type="checkbox" id="cb11" name="cbx[]" value="Images/1%20(11).png"  />
            <label for="cb11"><img src="Images/1%20(11).png" /></label>
        </li>
        <li><input type="checkbox" id="cb12" name="cbx[]" value="Images/1%20(12).png"  />
            <label for="cb12"><img src="Images/1%20(12).png" /></label>
        </li>
        <li><input type="checkbox" id="cb13" name="cbx[]" value="Images/1%20(13).png"  />
            <label for="cb13"><img src="Images/1%20(13).png" /></label>
        </li>
        <li><input type="checkbox" id="cb14" name="cbx[]" value="Images/1%20(14).png"  />
            <label for="cb14"><img src="Images/1%20(14).png" /></label>
        </li>
        <li><input type="checkbox" id="cb15" name="cbx[]" value="Images/1%20(15).png"  />
            <label for="cb15"><img src="Images/1%20(15).png" /></label>
        </li>
        <li><input type="checkbox" id="cb16" name="cbx[]" value="Images/1%20(16).png"  />
            <label for="cb16"><img src="Images/1%20(16).png" /></label>
        </li>
    


 
</table>

       <div style="float: left ; margin-left:50px"> <img src="Images/2%20(2).png" height="50" width="50"> </div>
     <table align = "center">
      <tr>
      <th></th>

        <li><input type="checkbox" id="cb17" name="cbx[]" value="Images/1%20(17).png"  />
            <label for="cb17"><img src="Images/1%20(17).png" /></label>
        </li> 
        <li><input type="checkbox" id="cb18" name="cbx[]" value="Images/1%20(18).png"  />
            <label for="cb18"><img src="Images/1%20(18).png" /></label>
        </li>
        <li><input type="checkbox" id="cb19" name="cbx[]" value="Images/1%20(19).png"  />
            <label for="cb19"><img src="Images/1%20(19).png" /></label>
        </li>
        <li><input type="checkbox" id="cb20" name="cbx[]" value="Images/1%20(20).png"  />
            <label for="cb20"><img src="Images/1%20(20).png" /></label>
        </li>
        <li><input type="checkbox" id="cb21" name="cbx[]" value="Images/1%20(21).png"  />
            <label for="cb21"><img src="Images/1%20(21).png" /></label>
        </li>
        <li><input type="checkbox" id="cb22" name="cbx[]" value="Images/1%20(22).png"  />
            <label for="cb22"><img src="Images/1%20(22).png" /></label>
        </li>
        <li><input type="checkbox" id="cb23" name="cbx[]" value="Images/1%20(23).png"  />
            <label for="cb23"><img src="Images/1%20(23).png" /></label>
        </li>
        <li><input type="checkbox" id="cb24" name="cbx[]" value="Images/1%20(24).png"  />
            <label for="cb24"><img src="Images/1%20(24).png" /></label>
        </li>
        
  </tr>
 
         
</table>
            <div style="float: left ; margin-left:50px"> <img src="Images/2%20(1).png" height="50" width="50"> </div>
     <table align = "center">
      <tr>
      <th></th>

        <li><input type="checkbox" id="cb25" name="cbx[]" value="Images/1%20(25).png"  />
            <label for="cb25"><img src="Images/1%20(25).png" /></label>
        </li> 
        <li><input type="checkbox" id="cb26" name="cbx[]" value="Images/1%20(26).png"  />
            <label for="cb26"><img src="Images/1%20(26).png" /></label>
        </li>
        <li><input type="checkbox" id="cb27" name="cbx[]" value="Images/1%20(27).png"  />
            <label for="cb27"><img src="Images/1%20(27).png" /></label>
        </li>
        <li><input type="checkbox" id="cb28" name="cbx[]" value="Images/1%20(28).png"  />
            <label for="cb28"><img src="Images/1%20(28).png" /></label>
        </li>
        
        
  </tr>
  
         
</table>
     
     
     
     <div class="panel-footer" style="margin-top:50px">
      <!-- <input type="submit" name="hero" > -->
      
      
                <a data-toggle="tab" href="#menu2"><button  id="3"  class="panel-title btns btn-primary btn-block" style="text-align:center; width:330px; color:#fff;background-color: #337ab7; margin-left: 200px" onclick="mainbtn2()">Submit</button></a>
     </div>

</div>
     
<style type="text/css">
    

    ul {
  list-style-type: none;
  margin-left: 100px;
}

li {
    display: inline-block;
    margin-left: -142px;
}

input[type="checkbox"][id^="cb"] {
  display: none;
}

label {
  padding: 0px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
}

label:before {
  background-color: white;
  color: white;
  content: " ";
  display: block;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

label img {
  height: 50px;
  width: 50px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked + label {
  border-color: #ddd;
}

:checked + label:before {
 
}

:checked + label img {
  transform: scale(0.9);
  box-shadow: 0 0 5px #333;
  z-index: -1;
  border: 3px solid red;
}
</style>
<script type="text/javascript">
    

    $(document).ready(function(){
    $("#btn").click(function(){
        alert(cb1); 
    });     
});
</script>

            
            
        </div>
        </div>
        
    <div id="menu2" class="tab-pane fade">
         <p class="description" style="margin-top: 20px ; text-align: center">
            If you want some additional requirements message us </p>
              
          <textarea id ='output' name="msg" class = "form-control" rows="8" placeholder="Enter Your Message Here" style="width: 650px ; margin-left: 50px;position: relative; border: solid 1px; font-family: sans-serif; font-size: 18px ; text-align: center"></textarea>

                <div class="panel-footer" style="margin-top:50px" >
                    <input type="Submit" name="sub" class="panel-title btns btn-primary btn-block" style="text-align:center; width:330px; color:#fff;background-color: #337ab7;margin-left: 200px;">      
                </div>
    </div>

</form>    

       
            </div>
        </div>

                <div class="col-sm-8" id="chat" style="width: 765px;">
                    <div class="messaging" style="margin-right:39px ; margin-left: -20px ; margin-top: -20px">
                        <div class="inbox_msg" style="height: 550px "> 
                            <div class="panel panel-default">
                                <div class="panel-heading " style="height: 50px">
                                    <h1 class="panel-title" style="text-align:center">Chat</h1>
                                </div>
                                <div class="mesgs">
                                  <div class="msg_history">
                                    
                                   
  
<?php  
include 'config.php';
$uid=$_SESSION['uid'];

$sql_in= mysql_query("SELECT * FROM msg where user_id ='$uid'");
  while ($r=mysql_fetch_array($sql_in)) {

   $type = $r['u_type'];
    ?>
    <?php  
      if ($type=='admin') {
        ?>
        <div class="incoming_msg">
                                      <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                                      <div class="received_msg">
                                        <div class="received_withd_msg">
                                          <p><?php echo $r['msg']; ?></p>
                                          <span class="time_date"></span></div>
                                      </div>
                                    </div>

    <?php
       
      }
      if ($type=='user') {
     ?>
     <div class="outgoing_msg">
                                      <div class="sent_msg">
                                        <p><?php echo $r['msg']; ?></p>
                                        <span class="time_date"></span> </div>
                                    </div>
    <?php

      }

    ?>

    
    <?php
  }
?>


                                    

                                    
                                    

                                    
                                  </div>
                                  <div class="type_msg" style="height: 100 px ">
                                    <div class="input_msg_write">
                                      <form action="msg.php" method="post">
                                          <input type="text" class="write_msg" placeholder="Type a message" name="msg" />
                                          <button class="msg_send_btn" type="submit" name="send" style="background-color: #337ab7;"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


<style type="text/css">
.btns{
  margin-left: 180px;
  width: 42%;
  padding:15px 40px;
  border-radius: 50px;
}
:focus {
    outline: none;
}
.frnin{
  border: none;
  float: left;
  width: 90%;
  height: 25px;
  padding: 10px;
  text-align: left;
}
.frmina{
  width: 10%;
  float: left;
  padding: 10px;
}
.form-control{
  border-radius: 50px;
  margin-bottom: 10px;
}
.padd{
  padding: 20px;
}
</style>









        <div class="row" style="margin-top:-100px ; margin-right: 19px ; margin-left: 10px">
      <div class="col-md-12 container white" style ="position: relative">
      <table class="table">
          <thead>
            <tr>
              <th>Champion</th>
              <th>Result</th>
              <th>Gain</th>
              <th>Notes</th>
              <th>Time</th>
              <th>Booster</th>
            </tr>
          </thead>
          <tbody>
            <?php
                include('config.php');
                $idu=$_SESSION['uid'];

                $sl=mysql_query("SELECT * FROM `skillboot` WHERE `user_id`='$idu' ORDER BY `id` DESC ");

                if (mysql_num_rows($sl)>0) 
                    {
                      while ($ew=mysql_fetch_array($sl)) 
                      {
              ?>          
            <tr>
              
              <td style="padding-top: 20px"><h3>Arjun</h3> </td>

              <td><h3><?php echo $ew['result'];?></h3></td>
              <td style="color: limegreen "><?php echo $ew['gains']; ?></td>
              <td><p style="margin-top: 25px "><?php echo $ew['notes']; ?></p></td>
              <td style="padding-top: 33px "><?php echo $ew['added_on']; ?></td>
              <td style="padding-top: 28px "><span class="last"><?php echo $ew['booster']; ?></span></td>
            </tr>
          <?php }} ?>
          </tbody>
      </table>


      </div>
      <div class="col-sm-3">

      </div>
    </div>





<style type="text/css">
    table h2{
      font-size: 25px;
    }
    .last{
      color: gray;
      font-size: 20px;
    }
.white{
  background-color: #fff;
  padding:50px;
      margin-top: -57px;

}

img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
    background: #fff;
    border: 1px solid #c4c4c4;
    clear: both;
    overflow: hidden;
    width: 100%;
    margin: 20px;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; padding:
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
    float: left;
    padding: 30px 15px 0 25px;
    width: 100%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 400px;
  overflow-y: auto;
}
.footer-bottom{
  background-color: #333;
  color: #fff;
  padding-top:20px;
  padding-bottom: 10px;
}
.footer-bottom a{
  color: #fff;
}

.footer-bottom ul li {
    display: inline-table;
    margin-left: 19px;
}
.footer-bottom p{
  margin-left: 100px;
  font-size: 15px;
  font-weight: 600;
}
.footer-bottom span{
  color: lightblue;
}
    </style>
</div>
</div>
    <div class="footer-bottom">
<div class="container">
          <div class="row">
            <div class="col-sm-6 ">
              <div class="copyright-text">
                <p> &copy Boosting Gods<br><span>Colin Koenig</span></p>
              </div>
            </div> <!-- End Col -->
            <div class="col-sm-6">              
              <ul class="social-link pull-right">
            <a href=""><li>Home</li></a>
                       <a href=""> <li>Features</li></a>
                       <a href=""> <li>About Us</li></a>
                        <a href=""><li>Portfolio</li></a>
                        <a href=""><li>Team</li></a>
                        <a href=""><li>Contact Us</li></a>
              </ul>             
            </div> <!-- End Col -->
          </div>
        </div>
</div>

</body>
</html>



<script>
document.write('

    <h1>Add your HTML code here</h1>\

     <p>Notice however, that you have to escape LF's with a '\', just like\
        demonstrated in this code listing.
    </p>

');
    </script>

