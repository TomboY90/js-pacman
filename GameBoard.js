import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup';

export default class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);

    return board;
  }

  showGameStatus(gameWin) {
    const div = document.createElement('div');
    div.classList.add('game-status');
    div.innerHTML = `${gameWin ? 'WIN!' : 'GAME OVER!'}`
    this.DOMGrid.appendChild(div);
  }

  createGrid(level) {
    this.resetGame();
    this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px)`;

    level.forEach(squre => {
      const div = document.createElement('div');
      div.classList.add('square', CLASS_LIST[squre]);
      div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px`;
      this.DOMGrid.appendChild(div);
      this.grid.push(div);

      if(CLASS_LIST[squre] === OBJECT_TYPE.DOT) {
        this.dotCount++;
      }

    })
  }

  addObject(position, classes) {
    this.grid[position].classList.add(...classes)
  }

  removeObject(position, classes) {
    this.grid[position].classList.remove(...classes)
  }

  isObjectExist = (position, object) => {
    return this.grid[position].classList.contains(object);
  }

  rotateDiv(position, degree) {
    this.grid[position].style.transform = `rotate(${degree}deg)`;
  }

  resetGame() {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = '';
  }
}