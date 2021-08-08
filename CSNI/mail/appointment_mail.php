<?
	//Information from appointment form
	$to = "contact@cosmeticsurgerynagpurindia.com";
	$subject = "Patient appointment form";
	$headers="From: <$email>";

	$msg="\n";
	$msg.="Name : $Name\n";
	$msg.="Family name : $surname\n";
	$msg.="Email : $email\n";
	$msg.="Phone : $phone\n";
	$msg.="Address : $address\n";
	$msg.="City : $city\n";
	$msg.="State : $state\n";
	$msg.="Zipcode : $zipcode\n";
	$msg.="Country : $country\n";
	$msg.="Nationality : $nationality\n";
	$msg.="Date of birth : $date / $month / $year\n";
	$msg.="Passport Number : $passport\n";
	$msg.="Arrival airport : $airport\n";
	$msg.="Arrival date and time: Date: $arrivaldate and Time: $arrivalHour hrs and $arrivalMin min\n";
	$msg.="Appointment date : $appoinMonth $appoinDate\n";
	$msg.="Airline and Flight Number : $AirlineNo\n";
	$msg.="Procedures : $procedure\n";
	$msg.="Medical history/Allergies : $medicalhistory\n";
	$msg.="Comments or Questions : $comments\n";

 	mail($to, $subject, $msg, $headers);
	header("Location: http://www.cosmeticsurgerynagpurindia.com/thanks.html"); 

	//confirmation mail
	$to = "$email\n";
	$subject = "Reciept from Cosmetic Surgery Nagpur India health center";
	$headers="From: Cosmetic Surgery Nagpur India health center <contact@cosmeticsurgerynagpurindia.com>";

	$msg="\n";
	$msg.= "Your appoinment is being processed.\n";
	$msg.= "Thank you\n";
	$msg.= "Cosmetic Surgery Nagpur India health center.\n";

 	mail($to, $subject, $msg, $headers);
	exit;
?>
