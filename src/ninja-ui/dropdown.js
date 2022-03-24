//Import CSS to get classes
import './styles/dropdown.css';

class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.trigger'); //gets trigger class inside container
    this.content = container.querySelector('.content');
  }
  init(){
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active'); //adds if absent, removes if present      
      this.content.classList.toggle('active');
    });
  }
}

//Export default Dropdown
export default Dropdown