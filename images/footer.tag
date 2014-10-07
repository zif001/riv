<%@ tag body-content="empty" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>

<div class="col-md-12">
	<cms:pageSlot position="Footer" var="feature" element="div" class="es_footer">
		<a href="" class="prev">Назад</a>
						<a href=""class="home">Вернуться в каталог</a>
						<div class="clear"></div>
		<cms:component component="${feature}"/> 
	</cms:pageSlot>
</div>
