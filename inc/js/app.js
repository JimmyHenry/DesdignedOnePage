var moduleScroller = (function() {
    "use strict";
    var items;

    function scroller() {
        console.log(this);
        var cible, elementCible;
        cible = this.getAttribute("data-target");
        elementCible = document.getElementById(cible);
        window.smoothScroll(elementCible, 1000);
    }

    function ecouterClick() {
        var i
        for (i = 0; i < items.length; i++) {
            items[i].onclick = scroller;
        }
    }
    window.onload = function() {
        items = document.querySelectorAll("#nav .item ");
        console.log(items);
        ecouterClick();
    };
}());
