/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  };
  const colMap = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  };
  const boxMap = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        continue;
      }

      const row = i + 1;
      const col = j + 1;

      // Calculate box number
      const box = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;

      const num = board[i][j];

      // console.log(num, row, col, box);
      // console.log(rowMap[row]);
      // console.log(colMap[col]);
      // console.log(boxMap[box]);

      if (
        rowMap[row][num] !== undefined ||
        colMap[col][num] !== undefined ||
        boxMap[box][num] !== undefined
      ) {
        return false;
      }

      rowMap[row][num] = 1;
      colMap[col][num] = 1;
      boxMap[box][num] = 1;
    }
  }

  return true;
};

// const data = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// console.log(isValidSudoku(data));
