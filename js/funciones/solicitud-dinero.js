$(function(){
	
	$(".formValido").validate();
	
	$(".guardar-frecuente").click(function(){
		$(this).hide();
		$(".frecuente-exito").fadeIn("fast");
	})


	$(".continuar").click(function () {
	 	 if ($(".formValido").valid()) {
	 		// carga Paso 2
	 		$("#tab-1").load("solicitud-dinero-efectivo-paso2.html", function(){

	 			$(".btn-azul-modal").click(function() {
	 				$(".btn-azul-terminos").hide();	
	 				$(".btn-celeste").fadeIn("fast");	
	 			});

	 			// carga Paso 3
	 			$(".btn-celeste").click(function() {
	 				$("#tab-1").load("solicitud-dinero-efectivo-paso3.html", function(){
	 					$("html, body").animate({ scrollTop: 0 }, "slow");
	 			  		return false;
	 				});	
	 			});	

	 			$("html, body").animate({ scrollTop: 0 }, "slow");
	 			  return false;
	 		});
		 }
	});

})