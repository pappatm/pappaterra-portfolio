console.log("all my girls slayyyy");

/*-- NOTES 
if(jQuery) {
    console.log("jquery loaded")
    }
else{
    console.log("no jquery")
    }
--*/

/*-- Menu Icon --*/
let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    // if mobil menu is cloaed, open it

    if(mobileMenuOpen == false) {
        $("#menu").removeClass("display-none-mobile");
        mobileMenuOpen = true;
        $("mobile-menu-text").text("Close");
        $("mobile-menu-icon").padStart("src", "assets/imgs/close.svg");
    }

    // if mobile menu is open, close it

    else {
        $("#menu").addClass("display-none-mobile");
        mobileMenuOpen = false;
        $("mobile-menu-text").text("Menu");
        $("mobile-menu-icon").attr("src", "assets/imgs/menu.svg")
    }

});
    