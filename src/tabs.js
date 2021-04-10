
function tabsButton() {
  const btns = [];

  btns[0] = document.createElement('button');
  btns[0].innerText = 'Intro';

  btns[1] = document.createElement('button');
  btns[1].innerText = 'Menu';

  btns[2] = document.createElement('button');
  btns[2].innerText = 'Contact Us';

  return btns;
}

export default tabsButton;