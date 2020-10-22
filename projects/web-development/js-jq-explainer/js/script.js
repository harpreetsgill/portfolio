/* 
Harpreet Singh Gill
A01083219
MDIA 2294
*/


// outputs whatever is in the input field
function testVariable()
{
	var userInput = document.getElementById("txtVar").value;

	document.getElementById("varResult").innerText = userInput;

}

// checks which kinf of declaration is used
function testVarDecl()
{
	if (document.getElementById("declOpt").selectedIndex == 1)
	{
		document.getElementById("varDeclResult").innerText = "apple";
	}

	else
	{
	document.getElementById("varDeclResult").innerText = "orange";
	}
}

// checks what type of data is slected
function testVarType()
{
	var txtVarType = "";

	switch (document.getElementById("varTypeOpt").selectedIndex)
	{

		case 0:
		txtVarType = "apple";
		document.getElementById("spnVarTypEq").innerText = "=";
		break;

		case 1:
		txtVarType = 7;
		document.getElementById("spnVarTypEq").innerText = "=";
		break;

		case 2:
		txtVarType = 7 < 10;
		document.getElementById("spnVarTypEq").innerText = "=";
		break;

		case 3:
		txtVarType = "I don't know what symbols are yet. Sorry.";
		document.getElementById("spnVarTypEq").innerText = "=";
		break;

		case 4:
		txtVarType = "";
		document.getElementById("spnVarTypEq").innerText = "=";
		break;

		case 5:
		txtVarType = "undefined";
		document.getElementById("spnVarTypEq").innerText = "";
		break;

	}

	document.getElementById("varTypeResult").innerText = txtVarType;

}


// checks for the variable scope
function testVarScope()
{
	if (document.getElementById("varScopeOpt").selectedIndex == 0)
	{
		document.getElementById("varScopeResult").innerText = "I am a global box";
		document.getElementById("varScpFnClBr").innerText = "}";
	}
	else
	{
		document.getElementById("varScopeResult").innerText = "I am a local orange";
		document.getElementById("varScpFnClBr").innerText = " ";
	}
}


// checks if the function is called or not
function testFuncDef()
{
	document.getElementById("funcDefResult").innerText = document.getElementById("OptFuncDefCall").selectedIndex == 1 ? "I am inside a function" : "";
}


// looks for user input parameter and outputs it
function testFuncParam()
{
	document.getElementById("funcParamResult").innerText = "###" + document.getElementById("txtFuncParam").value + "###";

}


// checks if there are more than returns and parameter entered by the user
function testFuncRet()
{
	var userInptNum = document.getElementById("numRetParam").value;

	document.getElementById("funcRetResult").innerText = (document.getElementById("fnRetOpt").selectedIndex == 0) ? userInptNum * 5 : userInptNum * 10;

}


// looks for things entered by the user in the array and outputs them
function testArr()
{
	var arrMyBox = [document.getElementById("arrVal1").value, document.getElementById("arrVal2").value, document.getElementById("arrVal3").value];

	document.getElementById("arrResult").innerText = "I have " + arrMyBox[0] + ", " + arrMyBox[1] + " and " + arrMyBox[2];
}



// var arrMyBox = ["apple", "orange", "cat"];

// console.log("I have " + arrMyBox[0] + ", " + arrMyBox[1] + " and " + arrMyBox[2]);

// console.log(arrMyBox);
