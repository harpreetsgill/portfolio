function toggleMenu() {
	var collapseMenu = document.getElementById("collapseMenu");

    if (collapseMenu.style.display == 'none' || collapseMenu.style.display == ''){
        collapseMenu.style.display = 'block';
    }
    else {
        collapseMenu.style.display = 'none';
    }
}

function toggleProjList() {
	var projList = document.getElementById("projList");

	if (projList.style.display == 'none' || projList.style.display == '')
	{
		projList.style.display = 'block';
	}
	else {
		projList.style.display = 'none';
	}
}