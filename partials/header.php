<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        function siteURL() {
            $protocol = 'http://';
            $domainName = $_SERVER['HTTP_HOST'] . '/';
            return $protocol . $domainName;
        }
    ?>
    
    <title><?php echo $pageTitle; ?></title>

    <!-- Google Tag Manager -->
	<script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WJFLBHS');
    </script>
    <!-- End Google Tag Manager -->
    
    <meta name="robots" content="all" />
	<meta name="description" content="<?php echo $pageDesc ?>">
    <meta name="author"content="Harpreet Singh Gill">
    <meta charset="UTF-8">
	<meta name="viewport"content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="<?php echo siteURL() . 'images/favicon.ico'?>" type="image/x-icon">

	<link rel="stylesheet" href="<?php echo siteURL() . 'css/reset.css' ?>">
    <link rel="stylesheet" href="<?php echo siteURL() . 'css/styles.css' ?>">
    <link rel="stylesheet" href="<?php echo siteURL() . 'css/main.css' ?>">
</head>
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJFLBHS"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="container">