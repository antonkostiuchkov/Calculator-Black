var main = function function_name (argument) {

	$('input').keyup(function () {
				//var NSO = parseFloat($('.NSO').val()) || 0;
				//var END = parseFloat($('.END').val()) || 0;

				if ($('.END').val() == '') {
					var NSO = parseFloat($('.NSO').val()) || 0;
					var END = NSO;
					$('.END').addClass('equals');
					;} else{
						var NSO = parseFloat($('.NSO').val()) || 0;
						var END = parseFloat($('.END').val()) || 0;
						$('.END').removeClass('equals');
					};

				var ADJ = parseFloat($('.ADJ').val())  || 0;
				if ($('.ADJ').val() =='') {
						var PRR = parseFloat($('.PRR').val()) || 0;
						var PRE = PRR;
						var NER = parseFloat($('.NER').val())  || 0;
						var NET = NER;
				  	} else{
						var PRR = parseFloat($('.PRR').val())  || 0;
						var PRE = PRR + ADJ;
						var NER = parseFloat($('.NER').val())  || 0;
						var NET = NER + ADJ;
				  	};
				var TXP = parseFloat($('.TXP').val()) || 0;
				var TXR = TXP / PRE * 100 || 0;
				$('.TXR').html(TXR.toFixed(3));
				$('.PRE').html(PRE.toFixed(3));
				$('.NET').html(NET.toFixed(3));
				 // if ($('.ADJ').val() == '') {
					// 		$('.col-md-12.reported').animate({
					// 			width: "100%"
					// 		},
					// 		300);
					// 		$('.input-group.adjusted').addClass('hidden')

				 //  	} else{

					// 		$('.col-md-12.reported').animate({
					// 			width: "290px"
					// 		},
					// 		300);
					// 		$('.input-group.hidden').removeClass('hidden')

				 //  	};

				 var SAL = parseFloat($('.SAL').val()) || 0;
				 if ($('.GRI').val() > '') {
						var GRI = parseFloat($('.GRI').val()) || 0;
						var GRM = GRI / SAL * 100 || 0;
				  	} else{
						var CGS = parseFloat($('.CGS').val()) || 0;
						var GRM = (SAL-CGS) / SAL * 100 || 0;
				  	};
				$('.GRM').html(GRM.toFixed(3));

				var DPA = parseFloat($('.DPA').val()) || 0;
				var EBI = parseFloat($('.EBI').val()) || 0;
				var EBT = DPA + EBI || 0;
				$('.EBT').html(EBT.toFixed(3));

				var EPS = NET / NSO || 0;
				$('.EPS').html(EPS.toFixed(3));


// Balance sheet calculations

	var TAS_1 = parseFloat($('.TAS_1').val()) || 0;
	var TAS_0 = parseFloat($('.TAS_0').val()) || 0;
	var ROA = NET / ((TAS_1 + TAS_0) / 2) * 100 || 0;
	var ROAx4 = NET / ((TAS_1 + TAS_0) / 2) * 400 || 0;
		$('.ROA').html(ROA.toFixed(3));
		$('.ROAx4').html(ROAx4.toFixed(3));


	var SHE_1 = parseFloat($('.SHE_1').val()) || 0;
	var SHE_0 = parseFloat($('.SHE_0').val()) || 0;
	var ROE = NET / ((SHE_1 + SHE_0) / 2) * 100 || 0;
	var ROEx4 = NET / ((SHE_1 + SHE_0) / 2) * 400 || 0;
		$('.ROE').html(ROE.toFixed(3));
		$('.ROEx4').html(ROEx4.toFixed(3));


	var BPS = SHE_1 / END || 0;
	$('.BPS').html(BPS.toFixed(3));

	var CA = parseFloat($('.CA').val()) || 0;
	var CL = parseFloat($('.CL').val()) || 0;
	var NWC = CA - CL || 0;
	$('.NWC').html(NWC.toFixed(3));

	var cash = parseFloat($('.cash').val()) || 0;
	var FL_1 = parseFloat($('.FL_1').val()) || 0;
	var FL_2 = parseFloat($('.FL_2').val()) || 0;
	var FL_3 = parseFloat($('.FL_3').val()) || 0;
	var FL_4 = parseFloat($('.FL_4').val()) || 0;
	var FL_5 = parseFloat($('.FL_5').val()) || 0;
	var NDT = FL_1 + FL_2 + FL_3 + FL_4 + FL_5 - cash || 0;
	$('.NDT').html(NDT.toFixed(3));

	var price = parseFloat($('.price').val()) || 0;
	var MNT = parseFloat($('.MNT').val()) || 0;
	var ENT = NDT + MNT + (price * END) || 0;
	$('.ENT').html(ENT.toFixed(3));

	var FA = parseFloat($('.FA').val()) || 0;
	var RNA = NET / (FA + NWC) || 0;
	var RNAx4 = RNA * 4 || 0;
		$('.RNA').html(RNA.toFixed(3));
		$('.RNAx4').html(RNAx4.toFixed(3));


	var TCE = parseFloat($('.FA').val()) || 0;
	var CRT = TCE / SAL *100 || 0;
	$('.CRT').html(CRT.toFixed(3));

// Cash Flow calculations

	var CSH = (DPA + NET) / NSO || 0;
	$('.CSH').html(CSH.toFixed(3));

	var CFO = parseFloat($('.CFO').val()) || 0;
	var CPX = parseFloat($('.CPX').val()) || 0;
	var CPS = CFO / NSO || 0;
	var FRC = CFO - CPX || 0;
	var FCF = FRC / NSO || 0;
	$('.CPS').html(CPS.toFixed(3));
	$('.FRC').html(FRC.toFixed(3));
	$('.FCF').html(FCF.toFixed(3));


// Math calculations

	var plus_1 = parseFloat($('.plus_1').val()) || 0;
	var plus_2 = parseFloat($('.plus_2').val()) || 0;
	var plus_3 = parseFloat($('.plus_3').val()) || 0;
	var plus_4 = parseFloat($('.plus_4').val()) || 0;
	var plus_5 = parseFloat($('.plus_5').val()) || 0;
	var minus_1 = parseFloat($('.minus_1').val()) || 0;
	var minus_2 = parseFloat($('.minus_2').val()) || 0;
	var minus_3 = parseFloat($('.minus_3').val()) || 0;
	var minus_4 = parseFloat($('.minus_4').val()) || 0;
	var minus_5 = parseFloat($('.minus_5').val()) || 0;
	var DIV = parseFloat($('.DIV').val()) || 1;
	var MUL = parseFloat($('.MUL').val()) || 1;
	var SUM = plus_1 + plus_2 + plus_3 + plus_4 + plus_5 - minus_1 - minus_2 - minus_3 - minus_4 - minus_5 || 0;
	$('.SUM').html(SUM.toFixed(3));
	var RES = SUM / DIV * MUL || 0;
	$('.RES').html(RES.toFixed(3));

// Reset calculations

		$('.reset_IS').click(function () {
			// $('.EPS').val('')
			// $('.GPS').val('')
			$('.SAL').val('')
			$('.GRI').val('')
			$('.DPA').val('')
			$('.EBI').val('')
			$('.PRE').val('')
			$('.TXP').val('')
			$('.NET').val('')
			// $('.NER').val('')

		}); //end of reset fun

		$('.reset_BS').click(function () {
			$('.TAS_1').val('')
			$('.TAS_0').val('')
			$('.SHE_1').val('')
			$('.SHE_0').val('')
			$('.cash').val('')
			$('.FL_1').val('')
			$('.FL_2').val('')
			$('.FL_3').val('')
			$('.FL_4').val('')
			$('.price').val('')
			$('.MNT').val('')

		}); //end of reset fun

		$('.reset_CF').click(function () {
			$('.CFO').val('')
			$('.CPX').val('')


		}); //end of reset fun




		$('.reset_math').click(function () {
			$('.plus_1, .plus_2, .plus_3, .plus_4, .plus_5, .minus_1, .minus_2,.minus_3,.minus_4,.minus_5').val('')
		}); //end of reset fun


		$('.reset_all').click(function () {
			$('.SAL, .GRI, .DPA, .EBI, .PRE, .TXP, .NET,.TAS_1, .TAS_0, SHE_1, .SHE_0, .cash, .FL_1, .FL_2, .FL_3, .FL_4, . price, .MNT,.CFO, .CPX, .plus_1, .plus_2,.plus_3, .plus_4, .plus_5, .minus_1, .minus_2,.minus_3,.minus_4,.minus_5,').val('')
		}); //end of reset fun

	});  //end of keyup fun








 //    $(".toggle-btn.IS").click(function(){
 //        $("#Collapsible_IS").hide();
 //        $("#Collapsible_IS").collapse('toggle');
 //    });


 // $(".toggle-btn.BS").click(function(){
 //        $("#Collapsible_BS").hide();
 //        $("#Collapsible_BS").collapse('toggle');
 //    });





$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });
});




$(document).ready(function() {

  $('.po-markup > .po-link').popover({
    trigger: 'hover',
    html: true,  // must have if HTML is contained in popover

    // get the title and conent
    title: function() {
      return $(this).parent().find('.po-title').html();
    },
    content: function() {
      return $(this).parent().find('.po-body').html();
    },

    container: 'body',
    placement: 'right'

  });

});



}; //end of main fun

$(document).ready(main)
