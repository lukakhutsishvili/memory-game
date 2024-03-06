import SingleWin from "./components/singlePlayerWin";

export type menuType = {
  setMenu: (e) => void;
  menu: boolean;
  overlay: boolean;
  setOverLay(e): void;
  setMinutes(min): void;
  setSeconds(sec): void;
  setSelectedIndexes(i): void;
  setMatchedIndexes(i): void;
  setCount(i): void;
  setPlayerPoints(i): void;
  numOfPlayers: number[];
  setCurrentPlayer(e): void;
  setShuffle(i): void;
  shuffle: boolean;
};

export type gameType = {
  numOfPlayers: number[];
  gridSize: number;
  setGridSize(e): void;
  theme: string;
  setTheme(e): void;
};

export type homeTypes = {
  numOfPlayers: number[];
  setNumOfPlayers(num): void;
  gridSize: number;
  setGridSize(e): void;
  theme: string;
  setTheme(e): void;
};

export type singleWinType = {
  minutes: number;
  seconds: number;
  count: number;
  numOfPlayers: number[];
  setOverLay(e): void;
  setMinutes(min): void;
  setSeconds(sec): void;
  setSelectedIndexes(i): void;
  setMatchedIndexes(i): void;
  setCount(i): void;
  setPlayerPoints(i): void;
  setCurrentPlayer(e): void;
  shuffle: boolean;
  setShuffle(e): void;
};

export type multiWinType = {
  playerPoints: number[];
  numOfPlayers: number[];
  setOverLay(e): void;
  setMinutes(min): void;
  setSeconds(sec): void;
  setSelectedIndexes(i): void;
  setMatchedIndexes(i): void;
  setCount(i): void;
  setPlayerPoints(i): void;
  setCurrentPlayer(e): void;
  shuffle: boolean;
  setShuffle(e): void;
};
