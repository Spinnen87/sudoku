/*jshint esversion: 6 */
module.exports = function solveSudoku(matrix) {
  // your solution
  //cheak row
  function validRow(row, value) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == value) {
        return false;
      }
    }
    return true;
  }

  //cheak col
  function validCol(col, value) {
    for (let row = 0; row < 9; row++) {
      if (matrix[row][col] == value) {
        return false;
      }
    }
    return true;
  }

  //cheak block 3*3
  function validBlock(row, col, value) {
    col = Math.floor(col / 3) * 3;
    row = Math.floor(row / 3) * 3;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (matrix[row + r][col + c] == value) {
          return false;
        }
      }
    }
    return true;
  }

  function sudokuFull(grid) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] == 0) {
          return false;
        }
      }
    }
    return true;
  }

  //one zero in col
  function onlyOneZeroInCol(col) {
    let i = 0;
    let index = 0;
    let sum = 0;
    for (let row = 0; row < 9 && i < 2; row++) {
      if (matrix[row][col] == 0) {
        i++;
        index = row;
      }
      sum += matrix[row][col];
    }
    if (i == 1) {
      matrix[index][col] = 45 - sum;
    }
  }

  //one zero in row
  function onlyOneZeroInRow(row) {
    let i = 0;
    let index = 0;
    let sum = 0;
    for (let col = 0; col < 9 && i < 2; col++) {
      if (matrix[row][col] == 0) {
        i++;
        index = col;
      }
      sum += matrix[row][col];
    }
    if (i == 1) {
      matrix[row][index] = 45 - sum;
    }
  }

  //one zero in block 3*3
  function onlyOneZeroInBlock(row, col) {
    let i = 0;
    let indexCol = 0;
    let indexRow = 0;
    let sum = 0;
    col = Math.floor(col / 3) * 3;
    row = Math.floor(row / 3) * 3;

    for (let r = 0; r < 3 && i < 2; r++) {
      for (let c = 0; c < 3 && i < 2; c++) {
        if (matrix[row + r][col + c] == 0) {
          i++;
          indexCol = col + c;
          indexRow = row + r;
        }
        sum += matrix[row + r][col + c];
      }
      if (i == 1) {
        matrix[indexRow][indexCol] = 45 - sum;
      }
    }
  }

  for (let index = 0; index < 9; index++) {
    onlyOneZeroInCol(index);
    onlyOneZeroInRow(index);
  }

  return matrix;

};