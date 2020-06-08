<?php
    $name = $_POST['name'];
    $mail_from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $mail_to = "jefftran.ux@gmail.com";
    $headers = "From: ".$mail_from;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message." \n\n(From My Portfolio)";

    mail($mail_to, $subject, $txt, $headers);
    header("Location: http://cgi.soic.indiana.edu/~jefftran/portfolio/index.html");
?>