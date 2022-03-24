//Import CSS
import './styles/snackbars.css';

class Snackbar {
  constructor() {
    this.snackbar = document.createElement('div'); //create new div element
  }
init(){
  this.snackbar.classList.add('snackbar'); //add snackbar class to new snackbar element
  document.querySelector('body').appendChild(this.snackbar); //append snackbar to body
 }
show(message){
  this.snackbar.textContent = message;
  this.snackbar.classList.add('active');
  setInterval(() => {this.snackbar.classList.remove('active')}, 3000);
}
}

//Export Snackbars
export default Snackbar