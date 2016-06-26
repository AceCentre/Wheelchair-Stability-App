$(document).ready(function(){
	var clientID = "";
	var wheelbase = 0;
	var frontTrack = 0;
	var rearTrack = 0;
	var scaleHieght = 0;
	var note = "";
	var frontWhlUpL = 0;
	var frontWhlUpR = 0;
	var frontWhlDownL = 0;
	var frontWhlDownR = 0;
	var baseFrontL = 0;
	var baseFrontR = 0;
	var baseRearL = 0;
	var baseRearR = 0;
	var upHill = 0;
	var downHill = 0;
	var SideWaysL = 0;
	var SideWaysR = 0;
	var arrStep2 = [];
	var arrStep3 = [];
	$("#step2").click(function step2(){
		clientID = $("#clientID").val();
		wheelbase = $("#wheelbase").val();
		frontTrack = $("#frontTrack").val();
		rearTrack = $("#rearTrack").val();
		scaleHieght = $("#scaleHieght").val();
		note = $("#note").val();
		clientID = parseInt(clientID);
		wheelbase = parseInt(wheelbase);
		frontTrack = parseInt(frontTrack);
		rearTrack = parseInt(rearTrack);
		scaleHieght = parseInt(scaleHieght);
		arrStep2 = [wheelbase, frontTrack, rearTrack, scaleHieght];
		for(var i = 0; i<arrStep2.length; i++){
			if (!$.isNumeric(arrStep2[i])) {
				//Check if input is numeric
				alert("Following field require numbers only."); //Show error
				return false;
			}
		}
		if (clientID != "" && wheelbase != "" && frontTrack != "" && rearTrack != "" && scaleHieght != "" ) {
			$("#page1").css("display","none");
			$("#page2").css("display","block");
		}
		else{
			alert("All fields are required")
		}
	});
	$("#step3").click(function step3(){
		frontWhlUpL = $("#frontWhlUpL").val();
		frontWhlUpR = $("#frontWhlUpR").val();
		frontWhlDownL = $("#frontWhlDownL").val();
		frontWhlDownR = $("#frontWhlDownR").val();
		baseFrontL = $("#baseFrontL").val();
		baseFrontR = $("#baseFrontR").val();
		baseRearL = $("#baseRearL").val();
		baseRearR = $("#baseRearR").val();
		frontWhlUpL = parseInt(frontWhlUpL);
		frontWhlUpR = parseInt(frontWhlUpR);
		frontWhlDownL = parseInt(frontWhlDownL);
		frontWhlDownR = parseInt(frontWhlDownR);
		baseFrontL = parseInt(baseFrontL);
		baseFrontR = parseInt(baseFrontR);
		baseRearL = parseInt(baseRearL);
		baseRearR = parseInt(baseRearR);	
		arrStep3 = [frontWhlUpL, frontWhlUpR, frontWhlDownL, frontWhlDownR, baseFrontL, baseFrontR, baseRearL, baseRearR];
		for(var i = 0; i<arrStep3.length; i++){
			if (!$.isNumeric(arrStep3[i])) {
				//Check if input is numeric
				alert("Following field require numbers only."); //Show error
				return false;
			}
		}	
		if (frontWhlUpL != "" && frontWhlUpR != "" && frontWhlDownL != "" && rearTrack != "" && baseFrontL != "" && baseFrontR != "" && baseRearL != "" && baseRearR != "" ) {
			$("#page1").css("display","none");
			$("#page2").css("display","none");
			$("#page3").css("display","block");			
			upHill = 0;
			downHill = 0;
			SideWaysL = 0;
			SideWaysR = 0;
			upHill = wheelbase + frontWhlUpL + frontWhlUpR;
			downHill = frontTrack + frontWhlDownL + frontWhlDownR;;
			sideWaysL = frontTrack + frontWhlDownL + frontWhlDownR;
			sideWaysR = frontTrack + frontWhlDownL + frontWhlDownR;
			$("#upHill").html(upHill);
			$("#downHill").html(downHill);
			$("#sideWaysL").html(sideWaysL);
			$("#sideWaysR").html(sideWaysR);
			$("#_note").html(note);

		}
	});
	$("#export").click(function(){
                $("#export_table").tableToCSV();
    });


});