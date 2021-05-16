function main(){
    //variables
    let nav=document.getElementById("nav");
    let iconMenu=document.getElementById("icon-menu");
    let iconMenu2=document.getElementById("icon-menu2");

    //eventos
    iconMenu.onclick= function abrir(){
        nav.style.cssText="transform: translateY(0%);"
        iconMenu2.style.cssText=" visibility:visible ;";
        iconMenu.style.cssText=" visibility:hidden ;";
     
    }
    
    iconMenu2.onclick= function cerrar(){
        nav.style.cssText="transform:translateY(-100%);"
        iconMenu2.style.cssText=" visibility:hidden ;";
        iconMenu.style.cssText=" visibility:visible ;";
        
    }


}
