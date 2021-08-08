<?
	//Information from tell a friend form
	$to = "$F_email";
	$subject = "Watch new site - Cosmetic Surgery Nagpur India";
	$headers="From: <$email>";

	$msg="\n";
	$msg.="Hi $F_name ,\n";
	$msg.= "$message\n";
	$msg.="View this Page URL : $url\n";
	$msg.="yours\n";
	$msg.="$name\n";

 	mail($to, $subject, $msg, $headers);
	header("Location: http://www.cosmeticsurgerynagpurindia.com/confirmation.html"); 

	//confirmation mail
	$to = "$email\n";
	$subject = "Reciept from Cosmetic Surgery Nagpur India health center";
	$headers="From: <$F_email>";

	$msg="\n";
	$msg.= "Your email is sent to your friend.\n";
	$msg.= "Thank you\n";
	$msg.= "Visit again\n";
	$msg.= "Cosmetic Surgery Nagpur India health center team.\n";

	mail($to, $subject, $msg, $headers);
	exit;
?>