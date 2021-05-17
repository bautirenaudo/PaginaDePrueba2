function main(){
    let tocar= document.getElementById("tocar");
    let c2= document.getElementById("circulo2");
    let c1=document.getElementById("circulo1");
  
    tocar.onclick=function a(){
       c2.style.cssText="animation-name: bro;animation-duration: 15s;animation-iteration-count:infinite ;"; 
       c1.style.cssText="animation-name: ceja;animation-duration: 3s;animation-iteration-count:infinite ;";
    }
    
   
}