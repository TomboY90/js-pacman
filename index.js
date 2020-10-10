import { LEVEL, OBJECT_TYPE } from './setup'

// classes
import GameBoard from './GameBoard';

// DOM ELEMENTS
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

// Game constants
const POWER_PILL_TIME = 10000; // ms
const GLOBAL_SPEED = 80; // ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Inital setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function startGame() {

}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts) {

}


function gameOver(pacman, grid) {

}