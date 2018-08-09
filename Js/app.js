/*$(document).ready(function()
{
alert("hello");
});*/
$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EX)|(DEX)|(EE)|(DEE)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})+/gi.test(this.value))
		{
			alert("invalid");
			this.value="";

		}
	});

	$('#sname').on('keypress',function(e){
		
		if(/[^a-zA-Z ]/.test(e.key))
		{
			alert("Invalid Name Only aphabet and space is allowed");
			this.value="";
			return false;
		}

	});
	
	$('#sname').on('keypress',function(e){
		
		if(/[^a-zA-Z ]/.test(e.key))
		{
			alert("Invalid Name Only aphabet and space is allowed");
			this.value="";
			return false;
		}

	});

});
