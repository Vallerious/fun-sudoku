export default sudokuGenerator = {
  generateSudoku: () => {
    let squares = [];
    let available = [];
    let count = 0;
    const maxIndex = 8

    for (let i = 0; i < 81; i++) {
      available.push([1,2,3,4,5,6,7,8,9])
    }

    for (let i = 0; i < 81;) {
      if (available[i].length === 0) {
        available[i] = [1,2,3,4,5,6,7,8,9]
        squares[i - 1] = null
        i--
      } else {
        let randomNum = available[i][getRandomNaturalNumber(available[i].length)];

        if (conflicts(squares, new Item(i, randomNum))) {
          const indexOfConflictingNum = available[i].indexOf(randomNum);
          available[i].splice(indexOfConflictingNum, 1);
        } else {
          squares[i] = new Item(i, randomNum)
          const indexOfConflictingNum = available[i].indexOf(randomNum);
          available[i].splice(indexOfConflictingNum, 1);
          i++
        }
      }
    }

    return squares
  },

  getVisibleCells: () => {
    const visibleCellsCount = 30;
    const visibleCells = {};
    const allCellCoords = [];

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        allCellCoords.push(`${row}:${col}`)
      }
    }

    for (let i = 0; i < visibleCellsCount; i++) {
      let randomIdx = getRandomNaturalNumber(allCellCoords.length);
      visibleCells[allCellCoords[randomIdx]] = 1
      allCellCoords.splice(randomIdx, 1)
    }

    return visibleCells;
  }
}

function printSquares(squares) {
  let str = ''
  for (let i = 0; i < squares.length; i++) {
    str += ' '  + squares[i].Value
    if ((i+1) % 9 === 0) {
      str += '\n'
    }
  }

  return str;
}

function conflicts(squares, item) {
  for (var i = 0; i < squares.length; i++) {
    let current = squares[i];
    if (current && (current.Across === item.Across || current.Down === item.Down || current.Region === item.Region)) {
      if (current.Value === item.Value) {
        return true
      }
    }
  }

  return false
}

function Item(n, v) {
  n += 1
  this.Across = getAcrossFromNumber(n)
  this.Down = getDownFromNumber(n)
  this.Region = getRegionFromNumber(n)
  this.Value = v
  this.Index = n - 1
}

function getAcrossFromNumber(n) {
  let k = n % 9
  return k === 0 ? 9 : k
}

function getDownFromNumber(n) {
  let k;

  if (getAcrossFromNumber(n) == 9) {
    k = Math.floor(n / 9)
  } else {
    k = Math.floor(n / 9) + 1
  }

  return k
}

function getRegionFromNumber(n) {
  let a = getAcrossFromNumber(n)
  let d = getDownFromNumber(n)

  if (1 <= a && a < 4 && 1 <= d && d < 4) {
    return 1
  } else if (4 <= a && a < 7 && 1 <= d && d < 4) {
    return 2
  } else if (7 <= a && a < 10 && 1 <= d && d < 4) {
    return 3
  } else if (1 <= a && a < 4 && 4 <= d && d < 7) {
    return 4
  } else if (4 <= a && a < 7 && 4 <= d && d < 7) {
    return 5
  } else if (7 <= a && a < 10 && 4 <= d && d < 7) {
    return 6
  } else if (1 <= a && a < 4 && 7 <= d && d < 10) {
    return 7
  } else if (4 <= a && a < 7 && 7 <= d && d < 10) {
    return 8
  } else if (7 <= a && a < 10 && 7 <= d && d < 10) {
    return 9
  }
}

function getRandomNaturalNumber(exclusiveMaximum) {
  return Math.floor(Math.random() * Math.floor(exclusiveMaximum));
}
