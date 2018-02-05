$ (function(){

	$('button').bind('click', function (){

		var altura = $ ('#altura').val();
		var peso = $ ('#peso').val();

		altura= altura.replace(',', '.')
		peso= peso.replace(',', '.')

		var imc = peso/ (altura*altura);

		if (imc< 17){
			var traducao ='Muito abaixo do peso';
		}else if (imc >= 17 &&  imc < 18,49){
			var traducao= 'Abaixo do peso';
		}else if (imc >= 18,5 && imc <24,99){
			var traducao ='Peso normal';
		}else if (imc >= 25 && imc <29,99){
			var traducao ='Acima do peso';
		}else if (imc >= 30 && imc <34,99){
			var traducao ='Obesidade I';
		}else if (imc >= 35 && imc <39,99){
			var traducao ='Obesidade II';
		}else if (imc < 40){
			var traducao ='Obesidade III';
				
		}

		$('#resultado').html("Seu IMC é: "+imc+" kg/m e seu status é: "+traducao);

	});ßß
});