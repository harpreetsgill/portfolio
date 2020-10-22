// Shows a hamburger menu on small viewports
function toggleMenu() {
    var collapseMenu = document.getElementById("collapseMenu");

    if (collapseMenu.style.display == 'none' || collapseMenu.style.display == ''){
        collapseMenu.style.display = 'flex';
    }
    else {
        collapseMenu.style.display = 'none';
    }
}


// Shows types of products
function toggleProdList() {

    var prodList = document.getElementById("product-list");

    if (prodList.style.display == 'none' || prodList.style.display == '') {
        prodList.style.display = 'flex';
    }

    else {
        prodList.style.display = 'none';
    }
}


// Sets the item's main image 
function setItemImage(imgNum) {
    document.getElementById("mainImg").src = "img/item/main-" + imgNum + ".jpg";
}