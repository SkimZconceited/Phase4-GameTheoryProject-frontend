import React from 'react';
import Cell from './Cell';
import '../Board.css'

function Board() {
  const renderCell = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;

    // For determining if the cell should have a piece
    const hasPiece = (row < 3 && !isDarkSquare) || (row > 4 && isDarkSquare);

    return <Cell key={`${row}-${col}`} isDark={isDarkSquare} hasPiece={hasPiece} />;
  };

  return (
    <div className="board">
      {Array(8).fill(null).map((_, row) => (
        <div key={row} className="board-row">
          {Array(8).fill(null).map((_, col) => renderCell(row, col))}
        </div>
      ))}
    </div>
  );
}

export default Board;