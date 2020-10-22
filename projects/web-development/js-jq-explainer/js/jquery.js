/* 
Harpreet Singh Gill
A01083219
MDIA 2294
*/


$(document).ready(function(){

	// gets a text from an input box and writes it in a span
	$("#jQueryDef").click(function()
	{

		$("#appClr").text( $("#txtJQDef").val() );
	});



	//  writes a custom text based on the selected option
	$("#jQuerySlctr").click(function()
	{

		if ($("#JQOpt option:selected").index() == 0)
		{
			$(".slctAns").html("This paragraph tag has " + $("#txtJQSelTyp").val() + " and two classes - first class, second class, third class");
		}

		else if ($("#JQOpt option:selected").index() == 1)
		{
			$(".slctAns").html("This paragraph tag has an identifier and two classes - " + $("#txtJQSelTyp").val() + ", second class, " + $("#txtJQSelTyp").val());
		}

		else
		{
			$(".slctAns").html("This paragraph tag has an identifier and two classes - first class, " + $("#txtJQSelTyp").val() + ", third class");
		}

	});


	
	// changes the style of the word
	$("#jQueryGetSet").click(function()
	{
		$("#appClrGetSet").attr("style", $("#txtJQGetSet").val() )
	});


	// on button click, slides a word
	$("#btnSld").click(function()
	{
		if ($("#JQAnmtOpts option:selected").index() == 0)
		{
			$("#txtAnmt").toggle("slow");
		}

		else if ($("#JQAnmtOpts option:selected").index() == 1)
		{
			$("#txtAnmt").slideToggle("slow");
		}

		else
		{
			$("#txtAnmt").fadeToggle("slow");
		}



		// $("#txtSld").slideToggle("slow");
		// $("#txtSld").("#JQAnmtOpts option:selected").val("slow");
	});



});