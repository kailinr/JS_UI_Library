//Tooltip Module

//Import CSS here - call CSS classes below:
import './styles/tooltip.css';

class Tooltip {
  constructor(element) {
    this.element = element;
    this.message = element.getAttribute('data-message');
  }
  init(){
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);
    //el - add class if hover over span element once
    this.element.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });
    //el - remove class if hover off span element
    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });
  }
}

export {Tooltip as default}