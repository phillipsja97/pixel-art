import 'bootstrap';
import '../styles/main.scss';
import grid from './components/grid/grid';
import paint from './components/paintbrush/paintbrush';


const init = () => {
  grid.makeGrid();
  paint.printColorPicker();
  paint.attachEvents();
};

init();
