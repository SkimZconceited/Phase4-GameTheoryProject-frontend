import React from 'react';
import '../Piece.css'; 

function Piece({ color }) {
  const pieceStyle = {
    backgroundColor: color,
    width: '80%', 
    height: '80%',
    borderRadius: '50%',
    margin: '10%',
  };

  return <div className="piece" style={pieceStyle}></div>;
}

export default Piece;