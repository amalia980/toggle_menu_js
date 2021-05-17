let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar =document.querySelector(".nav-sidebar");
    let getSidebarUl =document.querySelector(".nav-sidebar ul");
    let getSidebarTitle =document.querySelector(".nav-sidebar span");
    let getSidebarLinks =document.querySelectorAll(".nav-sidebar a");

    //open toggle menu
    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "20rem";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    //close toggle menu
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "2rem";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarLinks.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}