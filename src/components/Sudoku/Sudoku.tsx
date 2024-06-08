import React, { useEffect, useState } from "react";
import "./Sudoku.css";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";

const App: React.FC = () => {
  const initialBoard: number[][] = [
    [5, 0, 4, 6, 7, 8, 9, 1, 2],
    [6, 0, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 0, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 0, 3],
    [4, 2, 6, 8, 5, 0, 0, 0, 1],
    [7, 1, 0, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 0, 7, 0, 8, 0],
    [2, 8, 7, 4, 1, 9, 6, 3, 0],
    [3, 4, 5, 2, 8, 6, 1, 7, 0],
  ];

  const finalBoard: number[][] = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const [board, setBoard] = useState<number[][]>(initialBoard);
  const [matrix, setMatrix] = useState<string[][]>([]);

  useEffect(() => {
    initializeMatrix();
  }, []);

  const initializeMatrix = () => {
    const newMatrix = initialBoard.map((row) =>
      row.map((cell) => (cell === 0 ? "" : String(cell)))
    );
    setMatrix(newMatrix);
  };

  const handleCellChange = (row: number, col: number, value: string) => {
    const newBoard = [...board];
    newBoard[row][col] = parseInt(value, 10) || 0;
    setBoard(newBoard);

    const newMatrix = matrix.map((rowArray, rowIndex) =>
      rowIndex === row
        ? rowArray.map((cell, colIndex) => colIndex === col ? value : cell)
        : rowArray
    );
    setMatrix(newMatrix);
  };

  const checkResult = () => {
    for (let i = 0; i < initialBoard.length; i++) {
      for (let j = 0; j < initialBoard[i].length; j++) {
        const matrixValue = isNaN(parseInt(matrix[i][j]))
          ? 0
          : parseInt(matrix[i][j]);
        if (matrixValue !== finalBoard[i][j]) {
          alert("Not quite !");
          console.log("Boards do not match!");
          return;
        }
      }
    }
    alert("You solved it !");
    console.log("Boards match!");
  };

  const renderCell = (rowIndex: number, colIndex: number) => {
    const cellValue = board[rowIndex][colIndex];
    const isInitialCell = initialBoard[rowIndex][colIndex] !== 0;

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      const input = e.currentTarget;

      if (isNaN(Number(key))) {
        e.preventDefault();

        // Remove the non-numeric character from the input value
        input.value = input.value.replace(/^[^0-9]*/, "");
      }
    };

    return (
      <React.Fragment key={colIndex}>
        {colIndex % 3 === 0 && colIndex !== 0 && <td className="separator" />}
        <td>
          {isInitialCell ? cellValue : (
            <input
              type="number"
              min="1"
              max="9"
              value={cellValue || ""}
              onChange={(e) =>
                handleCellChange(rowIndex, colIndex, e.target.value)}
              onKeyUp={handleKeyPress}
            />
          )}
        </td>
      </React.Fragment>
    );
  };

  const renderRow = (row: number[], rowIndex: number) => {
    return (
      <React.Fragment key={rowIndex}>
        <tr>
          {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
        </tr>
        {rowIndex % 3 === 2 && rowIndex !== 8 && (
          <tr key={`separator_${rowIndex}`}>
            <td colSpan={9} className="separator" />
          </tr>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TopBar />
        </div>
        <h1></h1>
        <h1>Sudoku</h1>
        <div className="SudokuBoard">
          <table>
            <tbody>{board.map(renderRow)}</tbody>
          </table>
        </div>
        <div>
          <button className="CheckResult" onClick={checkResult}>
            Check result
          </button>
        </div>
        <h1></h1>
        <div>
          <BottomBar />
        </div>
      </header>
    </div>
  );
};

export default App;

// TODO: Add to personal site
