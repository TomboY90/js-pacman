import { OBJECT_TYPE, DIRECTIONS } from './setup';

export default class Pacman {
  constructor(speed, startPosition) {
    this.position = startPosition;
    this.speed = speed;
    this.direction = null;
    this.timer = 0;
    this.powerPill = false;
    this.rotation = true;
  }

  shouldMove() {
    if (!this.direction) return false;

    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }

    this.timer++;
  }

  getNextMove(objectExist) {
    let nextMovePosition = this.position + this.direction.movement;

    if (objectExist(nextMovePosition, OBJECT_TYPE.WALL) || objectExist(nextMovePosition, OBJECT_TYPE.GHOSTLAIR)) {
      nextMovePosition = this.position;
    }

    return { nextMovePosition, direction: this.position };
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN];
    const classedToAdd = [OBJECT_TYPE.PACMAN];

    return { classedToRemove, classedToAdd };
  }

  setNewPosition(nextPosition) {
    this.position = nextPosition;
  }

  handleKeyInput(e, objectExist) {
    let direction;

    // left, up, right, down
    if(e.keyCode >= 37 && e.keyCode <= 40) {
      direction = DIRECTIONS[e.key];
    } else {
      return;
    }

    const nextMovePosition = this.position + direction.movement;

    if(objectExist(nextMovePosition, OBJECT_TYPE.WALL)) return;
    this.direction = direction;
  }
}