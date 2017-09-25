$(document).ready(function() {

  grid = new Grid();
  player = new Player();

  $('#first-square').click(function() {
    console.log('button working!')
    player.moveTopLeft();
  })
})
