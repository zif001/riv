<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/desktop/template" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>
<%@ taglib prefix="common" tagdir="/WEB-INF/tags/desktop/common" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html lang="ru"> 
<head>
	<meta http-equiv="Content-Type" content="text/html"> 
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/terminalstorefront/_ui/desktop/theme-rivegauche/css//normalize.css">
	<link rel="stylesheet" href="/terminalstorefront/_ui/desktop/theme-rivegauche/css/bootstrap-min.css">	
	<link rel="stylesheet" href="/terminalstorefront/_ui/desktop/theme-rivegauche/css/es_main.css">
	 <meta name="viewport" content="width=device-width,  initial-scale=1.0">  
	<!--[if lt IE 9]>
		<script src="js/html5shiv.js"></script>
	<![endif]-->
</head>
<body>
	<div class="container es_wrapper">
		<div class="row">	
	<div class="col-md-12">
		<div class="es_main-content">		
			<a href="">
				<div class="es_box-1">
					<span><spring:theme code="terminal.start.menu.title1"/></span>
				</div>
			</a>
			<a href="">
				<div class="es_box-2">
					<span><spring:theme code="terminal.start.menu.title2"/></span>
					<span></span>
				</div>
			</a>
			<a href="">
				<div class="es_box-3">
					<span><spring:theme code="terminal.start.menu.title3"/></span>
					<span></span>
				</div>
			</a>
			<a href="">
				<div class="es_box-4">
					<span><spring:theme code="terminal.start.menu.title4"/></span>
					<span></span>
				</div>
			</a>
			<div class="es_box-center">
				<span><spring:theme code="terminal.start.menu.title.center1"/><span><spring:theme code="terminal.start.menu.title.center2"/></span></span>			
		
			</div>
		</div>
	</div>
	</div>

</body>
</html> 

