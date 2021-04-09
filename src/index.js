import {tabsButton} from './tabs';
import {introduction} from './intro';
import {menuitems} from './menu';

let contentdiv = document.getElementById("content");

//Creating the Tabs
let tabsdiv = document.createElement("div");
tabsdiv.setAttribute("id","tab");

//Creating the Container 
let containerdiv = document.createElement("div");
containerdiv.setAttribute("id","container");

//Adding buttons to tab
let btns = tabsButton();
    
  for(let i=0; i < 3; i++){
      tabsdiv.appendChild(btns[i]);
  }

//Adding tabs and container div to content div
contentdiv.appendChild(tabsdiv);
contentdiv.appendChild(containerdiv);

//Adding intro to content div
let introdiv = introduction();  
containerdiv.appendChild(introdiv);
setstyle(btns[0]);

function resetstyle(btnindex){
    
    for(let i=0; i<btns.length; i++){
      if (i != btnindex)
      {
        btns[i].style.backgroundColor="white";
        btns[i].style.color="black";
      }
      
    }
    
}

function setstyle(btn){
    btn.style.backgroundColor="black";
    btn.style.color="white";
}

//intro button
btns[0].addEventListener("click", function(){
    containerdiv.appendChild(introdiv);
    setstyle(btns[0]);
    resetstyle(0);
    
});

//menu button
 btns[1].addEventListener("click", function(){
  containerdiv.innerHTML="";
  let menu = menuitems();
  containerdiv.appendChild(menu);
    setstyle(btns[1]);
    resetstyle(1);
});

//contact button
  btns[2].addEventListener("click", function(){
    containerdiv.innerHTML="";
    setstyle(btns[2]);
    resetstyle(2);
    
});

