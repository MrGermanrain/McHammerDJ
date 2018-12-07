<?php
$itemNo            = $_REQUEST['item_number'];
$itemTransaction   = $_REQUEST['tx']; // Paypal transaction ID
$itemPrice         = $_REQUEST['amt']; // Paypal received amount
$itemCurrency      = $_REQUEST['cc']; // Paypal received currency type
 
$price = $itemPrice;
$currency='USD';
 
if($itemPrice==$price && $itemCurrency==$currency)
{
    echo "<script>alert('Payment Has Been Successfully Done. Enjoy the Game!!!!')</script>";
}
else
{
    echo "<script>alert('Payment Has Been Failed. Please Try Again!!!!')</script>";
}
?>