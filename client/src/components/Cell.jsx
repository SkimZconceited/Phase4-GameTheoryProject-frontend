import React from 'react';
import Piece from './Piece';
import '../Board.css';

function Cell({ isDark, hasPiece }) {
  const cellStyle = {
    backgroundColor: isDark ? '#8B4513' : '#FFE4B5',
  };

  return (
    <div className={`cell ${isDark ? 'dark' : ''}`} style={cellStyle}>
      {hasPiece && <Piece color={isDark ? 'black' : 'white'} />}
    </div>
  );
}

export default Cell;