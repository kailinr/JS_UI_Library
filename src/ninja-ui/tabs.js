//Import CSS
import './styles/tabs.css';

class Tabs {
  constructor(container){
    this.container = container; //div.tabs container
    this.tabs = container.querySelectorAll('.trigger'); //Get all li with .trigger class for loop
    this.content = container.querySelectorAll('.content'); //Get all content divs for loop
  }
  init(){
    //add click el to all li items
      this.tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          this.toggleTabs(e); // send to toggleTabs
          this.toggleContent(e); //send to toggleContent
        });
      });   
  }

  toggleTabs(e){
    this.tabs.forEach(tab => {
      tab.classList.remove('active'); //remove all active 
    });
     e.target.classList.add('active'); //add to target li tab
  }

  toggleContent(e){
    const contentId = e.target.getAttribute('data-target'); 
    const targetContent = this.container.querySelector(contentId);

    this.content.forEach(item => {
      item.classList.remove('active');
    });
    targetContent.classList.add('active');
  }
}

//Export Tabs as default
export default Tabs