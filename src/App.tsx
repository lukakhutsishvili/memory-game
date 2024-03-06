
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const numState = () => {
    const storedNumOfPlayers = localStorage.getItem("numOfPlayers");
    return storedNumOfPlayers ? JSON.parse(storedNumOfPlayers) : [1];
  };
  const gridState = () => {
    const storedGridSize = localStorage.getItem("gridSize");
    return storedGridSize ? JSON.parse(storedGridSize) : 4;
  };

  const themeState = () => {
    const storedtheme = localStorage.getItem("theme");
    return storedtheme ? JSON.parse(storedtheme) : "numbers";
  };
  const [gridSize, setGridSize] = useState(gridState);
  const [numOfPlayers, setNumOfPlayers] = useState<number[]>(numState);
  const [theme, setTheme] = useState(themeState);

  useEffect(() => {
    localStorage.setItem("gridSize", JSON.stringify(gridSize));
  }, [gridSize]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("gridSize", JSON.stringify(gridSize));
  }, [gridSize]);

  useEffect(() => {
    localStorage.setItem("numOfPlayers", JSON.stringify(numOfPlayers));
  }, [numOfPlayers]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              numOfPlayers={numOfPlayers}
              setNumOfPlayers={setNumOfPlayers}
              gridSize={gridSize}
              setGridSize={setGridSize}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
        <Route
          path="/memory-game"
          element={
            <Game
              numOfPlayers={numOfPlayers}
              gridSize={gridSize}
              setGridSize={setGridSize}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
