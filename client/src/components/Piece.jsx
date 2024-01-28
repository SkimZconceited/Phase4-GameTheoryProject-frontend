import React from 'react';
import '../Piece.css'; 

function Piece({ color, pieceId }) {
  const pieceStyle = {
    backgroundColor: color,
    width: '80%', 
    height: '80%',
    borderRadius: '50%',
    margin: '10%',
    boxShadow: `5px 10px 10px rgba(0, 0, 0, 0.5)`, // Added a shadow effect to make it kinda 3d-ish
  };

  function pieceClicked() {
    console.log('Piece clicked:', pieceId);
  }

  return <div className="piece" style={pieceStyle} onClick={pieceClicked}></div>;
}

export default Piece;