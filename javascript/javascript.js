function main(){
    //variables
    let header1=document.getElementById("header1");
    let iconMenu=document.getElementById("icon-menu");
    let iconMenu2=document.getElementById("icon-menu2");

    //eventos

    iconMenu.onclick=function abrir(){
        header1.style.cssText="transform: translateX(0%);"; 
        iconMenu.style.cssText="visibility:hidden;";   
        iconMenu2.style.cssText="visibility:visible;"; 
    }

    iconMenu2.onclick=function cerrar(){
        header1.style.cssText="transform: translateX(-100%);"; 
        iconMenu.style.cssText="visibility:visible;";   
        iconMenu2.style.cssText="visibility:hidden;"; 
    }


}