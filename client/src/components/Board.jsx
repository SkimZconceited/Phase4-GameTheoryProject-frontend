import React from 'react';
import Cell from './Cell';
import '../Board.css';

const board = [
  [" ", "W", " ", "W", " ", "W", " ", "W"],
  ["W", " ", "W", " ", "W", " ", "W", " "],
  [" ", "W", " ", "W", " ", "W", " ", "W"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["B", " ", "B", " ", "B", " ", "B", " "],
  [" ", "B", " ", "B", " ", "B", " ", "B"],
  ["B", " ", "B", " ", "B", " ", "B", " "],
];

function Board() {

  const renderCell = (row, col, piece) => {
    const isDarkSquare = (row + col) % 2 === 1;

    // For determining if the cell should have a piece
    const hasPiece = piece !== " ";

    return (
      <Cell
        key={`${row}-${col}`}
        isDark={isDarkSquare}
        hasPiece={hasPiece}
        pieceColor={piece === "W" ? "white" : "black"}
        pieceId={`${row}-${col}`}
      />
    );
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((piece, colIndex) => renderCell(rowIndex, colIndex, piece))}
        </div>
      ))}
    </div>
  );
}

export default Board;