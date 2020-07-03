<?php
if (isset($_GET["for_visually_impaired"])) {
    if ($_GET["for_visually_impaired"] == 'true') {
        setcookie("ForVisuallyImpaired", 'true');
    } else {
        unset($_COOKIE['ForVisuallyImpaired']);
        setcookie('ForVisuallyImpaired', '', time() - 3600, '/');
    }
}
$visually_impaired = $_COOKIE["ForVisuallyImpaired"] == 'true';