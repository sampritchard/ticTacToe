function Grid() {
  this.array = [[],[],[],[],[],[],[],[],[]]
}

function Player() {
}

Player.prototype.moveTopLeft = function () {
  grid.array[0].push('X');
  console.log(grid.array)
};
