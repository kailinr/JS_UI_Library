//Enter code to be bundled here in index.js -> compiles to bundle.js

//----Tooltip -----
//Import Tooltip class
import Tooltip from "./ninja-ui/tooltip";
// new Tooltip from tooltip.js, and pass span tag as element
const tooltip = new Tooltip(document.querySelector('.tooltip'));
//Call Tooltip
tooltip.init();

//----Dropdown -----
import Dropdown from "./ninja-ui/dropdown";
const dropdowns = document.querySelectorAll('.dropdown'); //get all dropdown items ('All')
dropdowns.forEach(dropdown => { 
  const instance = new Dropdown(dropdown); //instantiate class constructor
  instance.init(); //Call init() (w/ el's) on each dropdown
});

//----Tabs -----
import Tabs from "./ninja-ui/tabs";
const tabs = new Tabs(document.querySelector('.tabs')); //grabs the div .tabs class
tabs.init();

//----Snackbars -----
import Snackbar from "./ninja-ui/snackbars";
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');

button.addEventListener('click', () => {
  snackbar.show('You clicked a snackbar!');
});

