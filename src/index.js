import tabsButton from './tabs';
import introduction from './intro';
import menuitems from './menu';
import contactUs from './contact';

const contentdiv = document.getElementById('content');

// Creating the Tabs
const tabsdiv = document.createElement('div');
tabsdiv.setAttribute('id', 'tab');

// Creating the Container
const containerdiv = document.createElement('div');
containerdiv.setAttribute('id', 'container');

// Adding buttons to tab
const btns = tabsButton();

for (let i = 0; i < 3; i += 1) {
  tabsdiv.appendChild(btns[i]);
}

// Adding tabs and container div to content div
contentdiv.appendChild(tabsdiv);
contentdiv.appendChild(containerdiv);

function setstyle(btn) {
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
}

// Adding intro to content div
const introdiv = introduction();
containerdiv.appendChild(introdiv);
setstyle(btns[0]);

function resetstyle(btnindex) {
  for (let i = 0; i < btns.length; i += 1) {
    if (i !== btnindex) {
      btns[i].style.backgroundColor = 'white';
      btns[i].style.color = 'black';
    }
  }
}

// intro button
btns[0].addEventListener('click', () => {
  containerdiv.innerHTML = '';
  containerdiv.appendChild(introdiv);
  setstyle(btns[0]);
  resetstyle(0);
});

// menu button
btns[1].addEventListener('click', () => {
  containerdiv.innerHTML = '';
  const menu = menuitems();
  containerdiv.appendChild(menu);
  setstyle(btns[1]);
  resetstyle(1);
});

// contact button
btns[2].addEventListener('click', () => {
  containerdiv.innerHTML = '';
  const cntct = contactUs();
  containerdiv.appendChild(cntct);
  setstyle(btns[2]);
  resetstyle(2);
});
