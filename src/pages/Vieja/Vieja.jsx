//El componente Vieja es un componente del juego tres en raya. 
//El componente tiene tres estados (grid, turn, winner) 
//Dos funciones. handleClick(), checkWinner().
//Renderiza una tabla con tres filas y tres columnas.

import './Vieja.css';
import React, { useState, useEffect } from "react";

const Vieja = () => {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turn, setTurn] = useState("X");

  const [winner, setWinner] = useState(null);

  const handleClick = (i, j) => {
  //La función slice() devuelve una nueva matriz que contiene 
  //los mismos elementos que la matriz original, pero en una 
  //nueva posición de memoria. çasi no se modifica la matriz original
  const newGrid = grid.slice();
  newGrid[i][j] = turn;
  setGrid(newGrid);

  const isWinner = checkWinner(newGrid, turn);

  if (isWinner) {
    setWinner(turn);
  } else if (grid.every(row => row.every(cell => cell !== ""))) {
    setWinner("Empate");
  }

  setTurn((turn === "X") ? "O" : "X");
};

const checkWinner = (grid, turn) => {
  for (let i = 0; i < 3; i++) {
    // Verifica las filas
    if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] === turn) {
      return turn;
    }

    // Verifica las columnas
    if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] === turn) {
      return turn;
    }
  }

  // Verifica las diagonales
  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] === turn) {
    return turn;
  }

  if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2] && grid[2][0] === turn) {
    return turn;
  }

  return null;
};

  const table = (
    <table>
      <tbody>
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={j}
                onClick={() => handleClick(i, j)}
                className={
                  cell === turn
                    ? "current-turn"
                    : "cell"
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <h1>Tres en raya</h1>
      {table}
      <h2>Jugador actual: {turn}</h2>
      {winner && (
        <h2>Ganador: {winner}</h2>
      )}
    </div>
  );
};

export default Vieja;
