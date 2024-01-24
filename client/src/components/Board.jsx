import React from 'react'
import Cell from './Cell';

function Board() {

  const renderCell = (i) => {
    return <Cell value={i} />;
};
  return (
    <div>
      {Array(9).fill(null).map((_, i) => renderCell(i))}
    </div>
  )
}

export default Board