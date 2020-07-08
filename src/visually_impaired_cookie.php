<?php
if (isset($_GET["for_visually_impaired"])) {
    if ($_GET["for_visually_impaired"] == 'true') {
        setcookie("ForVisuallyImpaired", 'true'); 
        $a = 'styles/main_styleseye.css';
        echo $twig->render('base.html', array('a' => $a));
        
    } 
    
    
    else {
        unset($_COOKIE['ForVisuallyImpaired']);
        setcookie('ForVisuallyImpaired', '', time() - 3600, '/');
    }

    
    
}
$visually_impaired = $_COOKIE["ForVisuallyImpaired"] == 'true';

if ($_GET["for_visually_impaired"] == 'false') {
    setcookie("ForVisuallyImpaired", 'false');
    $a = 'styles/main_styles.css';
        echo $twig->render('base.html', array('a' => $a));
    
}

