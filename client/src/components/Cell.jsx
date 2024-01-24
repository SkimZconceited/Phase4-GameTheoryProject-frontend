import React from 'react'

function Cell({ value, isDark }) {
  const cellStyle = {
    backgroundColor: isDark ? '#8B4513' : '#FFE4B5',
  };

  return <div className={`cell ${isDark ? 'dark' : ''}`} style={cellStyle}>{value}</div>;
}

export default Cell;