import React from 'react';
import '../Piece.css'; 

function Piece({ color }) {
  const pieceStyle = {
    backgroundColor: color,
    width: '80%', 
    height: '80%',
    borderRadius: '50%',
    margin: '10%',
    boxShadow: `5px 10px 10px rgba(0, 0, 0, 0.5)`, // Added a shadow effect to make it kinda 3d-ish
  };

  return <div className="piece" style={pieceStyle}></div>;
}

export default Piece;