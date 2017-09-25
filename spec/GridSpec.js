describe("The game board", function() {
  var grid;

  beforeEach(function() {
    grid = new Grid();
  });

  it("should have 9 spaces in an array", function() {
    expect(grid.array.length).toEqual(9);
  });
});

describe("Player X move into Top Left", function() {
  beforeEach(function() {
    grid = new Grid();
    player = new Player();
  });

  it("should add an X into the array", function() {
    player.moveTopLeft();
    expect(grid.array).toEqual([['X'],[],[],[],[],[],[],[], []])
  })
});
