<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
/*
 * include user agent data file
 */
 if ( file_exists("../../marketing-form/index.php")) {
   include_once("../../marketing-form/index.php");
 }
function header_seo_part($title = '', $zoho=false,$ga=false){
/* define doct type */	
$return = '<!DOCTYPE html>
<html lang="en">
<head>';

$hideTracking = isset($_REQUEST['hideTracking']) ? true : false;

if($zoho && !$hideTracking){
// Anti-flicker snippet (recommended)
$return .= '<script src="https://cdn.pagesense.io/js/virtualemployeepltd/cb177a20e3ae4ca59a0cafaceb5c11c8.js"></script>';		
}

$return.='<title>'.$title.'</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0">
<link rel="icon" href="/da/lib/img/fav-icon.png">';
          
    if(!isset($_REQUEST['hideCookiebot']) && !$hideTracking)      {
	$return .= '	<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="da1bf681-9d62-4c4a-920f-98f50426927a" type="text/javascript" async></script>'; 
	}
	
	if(!isset($_REQUEST['hideGTM']) && !$hideTracking)      {
	// GTM
	$return .= "	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TVSKMNS');</script>
	<!-- End Google Tag Manager -->";
	$return .="<!--  Clickcease.com tracking-->
<script type='text/javascript'>var script = document.createElement('script');
script.async = true; script.type = 'text/javascript';
var target = 'https://www.clickcease.com/monitor/stat.js';
script.src = target;var elem = document.head;elem.appendChild(script);
</script>
<!--  Clickcease.com tracking-->";	

	}
	
	if($ga && !$hideTracking){
	// GoogleAnalytics
	$return .= "<script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-26514453-1', 'auto');  
            // As url's ending with slash were adding domain name before sending to analytics had to remove the slash at the end.
            // Ex:  get-started folder had index.php file and the url was /get-started/ 
            var page = document.location.pathname.replace(/\/$/, '');
            ga('send', 'pageview', page);
        </script>";		
	}
         
    echo $return;   	
	
}

function header_navs($white=false){
$return = '';

$return .= "<noscript>
<a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com/stats/stats.aspx' alt='ClickCease'/></a>
</noscript>";
$return .= '

	<header class="header" id="mainheader" data-aos="fade-down" data-aos-duration="1500">
		<div class="header--flex container dflex align-items-center justify-between">
			<div class="logo"><a href="https://www.virtualemployee.com/">';
		

	if( $white ) {
	$return .= '<picture>
						<source media="(max-width: 1199px)" srcset="/da/lib/img/b-m-logo-white.png">
						<source media="(max-width: 1399px)" srcset="/da/lib/img/b-s-logo-white.png">
						<img src="/da/lib/img/b-logo-white.png" alt="Virtual Employee" style="width:auto;">
					</picture>';
					

	} else {
		
	$return .= '<picture>
						<source media="(max-width: 1199px)" srcset="/da/lib/img/b-m-logo.png">
						<source media="(max-width: 1399px)" srcset="/da/lib/img/b-s-logo.png">
						<img src="/da/lib/img/b-logo.png" alt="Virtual Employee" style="width:auto;">
					</picture>';
					
	}


				$return .= '</a></div>

				<div class="dn dblock-sm">
					<div class="hamburger">
						<span></span>
					</div>
				</div>

				<span class="top-icons flexbox position-relative dn-sm">
					<a href="skype:narinderve?call" class="icon top-icons-items"><i class="icon-skype"></i> <em>Video Call Us</em></a>
					<a href="mailto:sales@virtualemployee.com" class="icon top-icons-items"><i class="icon-envelope"></i> <em>Email Us</em></a>
					<div class="dropdown top-icons-items">
						<span class="trigger icon" onclick="toggleDropdown()"><i class="icon-phone"></i> <em>Call Us</em></span>
						<span class="dropdown-menu" id="dropdown" style="display: none">							
							<a class="dropdown-item" href="tel:+17722223505"><img src="/da/lib/img/us.svg" alt="" class="flag"> (+1)&nbsp;7722223505</a>
							<a class="dropdown-item" href="tel:+18733001095"><img src="/da/lib/img/canada.svg" alt="" class="flag"> (+1)&nbsp;8733001095</a>
							<a class="dropdown-item" href="tel: +441691887766"><img src="/da/lib/img/uk.svg" alt="" class="flag"> (+44)&nbsp;1691887766</a>
							<a class="dropdown-item" href="tel:+61280733418"><img src="/da/lib/img/aus.svg" alt="" class="flag"> (+61)&nbsp;280733418</a>
					
						</span>
					</div>
					<div class="dropdownoverlay"></div>
				</span>
			</div>
		</header>
		
	';	
			
	echo $return; 
		
	}


function footer_seo_part(){
	
		$return = '
		<footer>
			<div class="container fs14px text-gray-800 ac py64px fs12px-md">
				Copyright © 2009-'.date('Y').'. All Rights Reserved.<br>
				All content on this website belongs to Virtual Employee Private Limited &amp; TeckValley LLC and is copyright protected.<br>
				All client agreements shall be through Virtual Employee Pvt. Ltd., India / TeckValley LLC, USA. | <a href="//www.virtualemployee.com/privacypolicy" target="_blank" class="text-gray-800">Privacy Policy</a>
			</div>
		</footer>
		<style>
.phonecountrycode .stdcode {width: 86px; margin-right:0; border-top-right-radius: 0; border-bottom-right-radius: 0; padding-left:10px; padding-right:24px; background-position: right .4rem center;}
.phonecountrycode .stdcode.valid, .phonecountrycode .stdcode.error{padding-left:10px !important; padding-right:24px !important; background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M2 5l6 6 6-6\'/%3e%3c/svg%3e"); background-color: #fff; background-repeat: no-repeat; background-position: right .4rem center; background-size: 16px 12px; -moz-padding-start: calc(12px - 4px);}
.phonecountrycode .stdcode:focus {position: relative; z-index: 1;}
.phonecountrycode .stdcode + input {border-top-left-radius: 0; border-bottom-left-radius: 0; margin-left:-1px; padding-left:10px;}
.phonecountrycode .stdcode + input.valid, .phonecountrycode .stdcode + input.error {padding-right: calc(1.5em + .4rem) !important;}
</style>
		<script src="/da/lib/js/jquery.min.js"></script';
				

    $hideChat = isset($_REQUEST['hideChat']) ? true : false;
    
    if(!$hideChat) {
	$return.= "<!-- Chatra {literal} -->
<script>
    (function(d, w, c) {
        w.ChatraID = 'NvN5JNqKiuirEB9bY';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
</script>
<!-- /Chatra {/literal} -->"; 
	}
	
    echo $return;
//crm marketing formscript
 getcformScript();	

}
?>
