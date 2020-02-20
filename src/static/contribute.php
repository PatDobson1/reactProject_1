<?php

     require 'class.phpmailer.php';

    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $data = $_POST[0];

     //Create a new PHPMailer instance
      $mail = new PHPMailer();
      $nameVar = $data["username"];
      $emailVar = $data["useremail"];
      $titleVar = $data["codetitle"];
      $descriptionVar = $data["codedescription"];
      $linkVar = $data["codelink"];
      $messageVar = str_ireplace("\'","`",$messageVar);
      $messageVar = str_ireplace('\"',"`",$messageVar);
      $dateVar = date('l dS \of F Y h:i:s A');
     // used only when SMTP requires authentication
      $mail->IsSMTP();
      $mail->Host = 'mail.broadstonerarebreeds.co.uk';
      $mail->SMTPAuth = true;
      $mail->Username = 'smtp@broadstonerarebreeds.co.uk';
      $mail->Password = 'te00~V4l%6hhHHJ76';
     //Set who the message is to be sent from
      $mail->SetFrom($emailVar);
     //Set who the message is to be sent to
      $address = $emailVar;
      $mail->AddAddress($address);
     //Set the subject line
      $mail->Subject = "Coding sample - Code submission";

 $message = "
 Name: $nameVar\n
 Email: $emailVar\n
 Code title: $titleVar\n
 Code link: $linkVar\n
 ---------------------------------------------\n
$descriptionVar
 \n---------------------------------------------\n
 Date: $dateVar
 ";
      $mail->Body 	= $message;
      if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
      }
 ?>
