import React from 'react';
import Piece from './Piece';
import '../Board.css';

function Cell({ isDark }) {
  const cellStyle = {
    backgroundColor: isDark ? '#8B4513' : '#FFE4B5',
  };

  // Assume each cell has a piece, and color the piece based on the cell's darkness
  const pieceColor = isDark ? 'black' : 'white';

  return (
    <div className={`cell ${isDark ? 'dark' : ''}`} style={cellStyle}>
      <Piece color={pieceColor} />
    </div>
  );
}

export default Cell;