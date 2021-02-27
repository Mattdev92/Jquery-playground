import './css/index.scss';
import Icon from './assets/mat.jpg';
import add from './modules/add';

const myIcon = new Image();
myIcon.src = Icon;
document.querySelector('div').appendChild(myIcon);
const title = document.querySelector('druga');
console.log(add(1, 2), title);

/* display page after js................................ */
document.querySelector('body').style.display = 'inline';
