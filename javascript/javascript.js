function abrirMenu(){
    //variables
    let nav=document.getElementById("nav");
    let iconMenu=document.getElementById("icon-menu");
    let iconX=document.getElementById("icon-x");
    
    //eventos

    nav.style.cssText="transform: translateX(0%); transition: all .3s;";
    iconMenu.style.cssText="display:none;";
    iconX.style.cssText="display:block;";

}
function cerrarMenu(){
    //variables
    let nav=document.getElementById("nav");
    let iconMenu=document.getElementById("icon-menu");
    let iconX=document.getElementById("icon-x");
    
    //eventos

    nav.style.cssText="transform: translateX(100%); transition: all .3s;";
    iconMenu.style.cssText="display:block;";
    iconX.style.cssText="display:none;";

}

