function main(){
    //VARIABLES
    let nav=document.getElementById("nav");
    let iconMenu=document.getElementById("icon-menu");
    let iconMenu2=document.getElementById("icon-menu2");

    let circuloInstagram=document.getElementById("circulo-instagram");
    let circuloFacebook=document.getElementById("circulo-facebook");
    let circuloMail=document.getElementById("circulo-mail");
    let circuloMenu=document.getElementById("circulo-menu");
    let circuloMenu2=document.getElementById("circulo-menu2");


    //EVENTOS

    //menu pricipal
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

 
    
    //menu redes sociales
    circuloMenu.onclick= function abrir(){
        circuloInstagram.style.cssText="transform: translateY(-200px);";
        circuloFacebook.style.cssText="transform: translateY(-133px);";
        circuloMail.style.cssText="transform: translateY(-66px);";
        circuloMenu.style.cssText="visibility: hidden;";
        circuloMenu2.style.cssText="visibility: visible;";
    }

    circuloMenu2.onclick= function abrir(){
        circuloInstagram.style.cssText="transform: translateY(0%);";
        circuloFacebook.style.cssText="transform: translateY(0%);";
        circuloMail.style.cssText="transform: translateY(0%);";
        circuloMenu.style.cssText="visibility: visible;";
        circuloMenu2.style.cssText="visibility: hidden;";
    }

}
