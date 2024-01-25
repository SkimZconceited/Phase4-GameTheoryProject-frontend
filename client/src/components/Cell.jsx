import React from 'react'

function Cell({ isDark }) {
  const cellStyle = {
    backgroundColor: isDark ? '#8B4513' : '#FFE4B5',
  };

  return <div className={`cell ${isDark ? 'dark' : ''}`} style={cellStyle}></div>;
}

export default Cell;