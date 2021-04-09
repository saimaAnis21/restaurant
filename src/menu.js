function menuitems(){

let menudiv = document.createElement("div");
menudiv.setAttribute("class","flex-display ");

let cakediv= document.createElement("div");
cakediv.setAttribute("class","flex-display pb-10");

let browniediv = document.createElement("div");
browniediv.setAttribute("class","flex-display");

cakediv.innerHTML=`<span>----------Cakes----------</span>
<span>Cheese Cake</span>
<span>Chocolate Cake</span>
<span>Red Velvet Cake</span>
<span>Nutella Cake</span>
<span>Coffee Cake</span>`
browniediv.innerHTML=`<span>----------Brownies----------</span>
<span>Nutella Brownies</span>
<span>Candy Brownies</span>
<span>Caramel Square</span>`;

menudiv.appendChild(cakediv);
menudiv.appendChild(browniediv);
   return menudiv;
}

export {menuitems};