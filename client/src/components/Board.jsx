import React from 'react';
import Cell from './Cell';

function Board() {
  const renderCell = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const cellValue = `${row}${col}`;

    return <Cell key={`${row}-${col}`} value={cellValue} isDark={isDarkSquare} />;
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