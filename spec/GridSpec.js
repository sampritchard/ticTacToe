describe("Grid", function() {
  var grid;

  beforeEach(function() {
    grid = new Grid();
  });

  it("has a width of 3", function() {
    expect(grid.gridWidth).toEqual(3);
  });

  it("has a height of 3", function() {
    expect(grid.gridHeight).toEqual(3);
  });

  it("starts empty", function() {
    expect(grid.currentGrid).toEqual([]);
  });
});
