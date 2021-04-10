function menuitems() {
  const menudiv = document.createElement('div');
  menudiv.setAttribute('class', 'flex-display');

  const cakediv = document.createElement('div');
  cakediv.setAttribute('class', 'flex-display pb-10');

  const browniediv = document.createElement('div');
  browniediv.setAttribute('class', 'flex-display pb-10');

  const breaddiv = document.createElement('div');
  breaddiv.setAttribute('class', 'flex-display pb-10');

  cakediv.innerHTML = `<span>----------Cakes----------</span>
<span>Cheese Cake</span>
<span>Chocolate Cake</span>
<span>Red Velvet Cake</span>
<span>Nutella Cake</span>
<span>Coffee Cake</span>`;
  browniediv.innerHTML = `<span>----------Brownies----------</span>
<span>Nutella Brownies</span>
<span>Candy Brownies</span>
<span>Caramel Square</span>`;
  breaddiv.innerHTML = `<span>----------Bread----------</span>
<span>Classic Baguette Duo</span>
<span>Pain Two Olives</span>
<span>Pain Ancien</span>`;

  menudiv.appendChild(cakediv);
  menudiv.appendChild(browniediv);
  menudiv.appendChild(breaddiv);
  return menudiv;
}

export default menuitems;