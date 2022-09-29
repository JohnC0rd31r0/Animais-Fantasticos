import ScrollSuave from './modules/scroll-suave.js';
import ScroolAnima from './modules/scrollAnima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
import DropdownMenu from './modules/dropdownmenu.js';
import MenuMobile from './modules/menuMobile.js';
import Funcionamento from './modules/funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScroolAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile(
  '[data-menu = "button"]',
  '[data-menu="list"]'
);
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();
fetchAnimais('../../animaisapi.json', '.numeros-grid');
