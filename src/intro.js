
function introduction() {
  const txt = `cake cake, glorious cake! It's what we do best at PAUL and we'd even say our cakes are a 
slice above the rest! With 130 years of experience in baking the finest patisseries, pastries 
and cake, we've gone through the years to practice and perfect the art of baking the most 
special celebration cakes for you to enjoy with loved ones. From the extra chocolatey Chocolate
 Macaron Cakes, fresh and light Classic Carrot Cake to our recent launch of Cheesecakes. 
 Every celebration however big or small deserves to be special and what better 
 than a PAUL cake!`;

  const div = document.createElement('div');


  const heading = document.createElement('h1');
  heading.innerText = 'Paul Cafe and Restaurant';

  div.appendChild(heading);

  const para = document.createElement('p');
  para.innerText = txt;

  div.appendChild(para);

  return div;
}

export default introduction;
