<?php
    if ($_SERVER['REQUEST_METHOD'] != 'POST' ){
        header("location: contact.html") ;
    }

    $name = $_POST['name'] ;
    $email = $_POST['email'] ;
    $subject = $_POST['subject'] ;
    $message = $_POST['message'] ;

    //if( empty(trim($nombre)) ) $nombre = 'anonimous' ;
    
    $body = <<<HTML
        <h1>Contact from Ceclez-Portfolio</h1>
        <p>From: $nombre / $email</p>
        <h2>Message:</h2>
        $message
    HTML ;

    $headers = "MIME-Version: 1.0 \r\n" ;
    $headers.= "Content-type: text\html; charset=utf-8 \r\n" ;
    $headers.= "From: $name <$email> \r\n" ;
    $headers.= "To: Sitio web \r\n" ;
    //$headers.= "Cc: copia@email.com \r\n" ;
    //$headers.= "Bcc: copia@email.com \r\n" ;

    var_dump($name) ;
    $answ = mail('ceclez.pixel@gmail.com', "Mensaje web: $subject", $body, $headers ) ;
    var_dump($answ) ;

    header("Location: index.html") ;
        //Mensaje de gracias por contactar...
?>
