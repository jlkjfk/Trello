console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let naughtsTurn = true

let subtitleNew = document.getElementById('subtitle')
//function for handling clicks on cells
function cellClicked(e) {
  let cell = e.target //create a variable for the clicked cell so I can do stuff with it
  console.log('i clicked on: ' + cell)

  //if the cell is empty (check it's .innerHTML property)
  if (cell.innerHTML == '') {
    //figure out which symbol to put inside the cell("O" or "X" based on the naughtsTurn Boolean)
    //ADVANCED WAY: let symbol = naughtsTurn ? 'O' : 'X'

    if (naughtsTurn) {
      cell.innerHTML = 'O'
      checkForWin('O')
    } else {
      cell.innerHTML = 'X'
      checkForWin('X')
    }
    //reverse
    naughtsTurn = !naughtsTurn
    if (!gameIsOver) {
      if (naughtsTurn) {
        subtitleNew.innerHTML = 'Naughts Turn'
      } else if (!naughtsTurn) {
        subtitleNew.innerHTML = 'Crosses Turn'
      }
    }
  }
}

let gameIsOver = false
function checkForWin(symbol) {
  //HORIZONTAL LINES//

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  //VERTICAL LINES//
  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  //DIAGONAL LINES//

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true

  if (gameIsOver) {
    if (naughtsTurn) {
      subtitleNew.innerHTML = 'Naughts is the Winner'
    } else {
      subtitleNew.innerHTML = 'Crosses is the Winner'
    }
  }
}
