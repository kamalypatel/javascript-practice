

const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.textContent = "Hey I'm Red!";
redText.style.color = "red";

container.appendChild(redText);

const blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3";
blueHeader.style.color = 'blue';

container.appendChild(blueHeader);

const blackBorderDiv = document.createElement('div');
blackBorderDiv.style.backgroundColor = 'pink';
blackBorderDiv.style.border = 'black 2px solid';

const innerH1 = document.createElement('h1')
innerH1.textContent = "I'm in a div";

const innerP = document.createElement('p');
innerP.textContent = 'ME TOO!';

blackBorderDiv.appendChild(innerH1);
blackBorderDiv.appendChild(innerP);

container.appendChild(blackBorderDiv);