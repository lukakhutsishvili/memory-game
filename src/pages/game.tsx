import { useEffect, useState } from "react";
import Menu from "../components/menu";
import { gameType } from "../type";
import SingleWin from "../components/singlePlayerWin";
import MultiPlayer from "../components/multiPlayerWin";
import { Link } from "react-router-dom";



/*import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";*/

const Game: React.FC<gameType> = ({ numOfPlayers, gridSize, theme }) => {
  const [shuffle, setShuffle] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [shuffledArray, setShuffledArray] = useState<(number | JSX.Element)[]>(
    []
  );
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let array: (number | JSX.Element)[] = [];
  let arrayIcons: JSX.Element[] = [];
  const [menu, setMenu] = useState<boolean>(false);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [overLay, setOverLay] = useState(false);
  const [playerPoints, setPlayerPoints] = useState(
    Array(numOfPlayers.length).fill(0)
  );
  
  if (theme === "icons" && gridSize === 4) {
    arrayIcons = [
      <img className=" md:w-[55px]" src="/anchor.svg" />,
      <img className=" md:w-[55px]" src="/car.svg" />,
      <img className=" md:w-[55px]" src="/flask.svg" />,
      <img className=" md:w-[55px]" src="/futbol.svg" />,
      <img className=" md:w-[55px]" src="/hand-spock.svg" />,
      <img className=" md:w-[55px]" src="/lira-sign.svg" />,
      <img className=" md:w-[55px]" src="/snowflake.svg" />,
      <img className=" md:w-[55px]" src="/sun.svg" />,
    ];
    arrayIcons = arrayIcons.concat(arrayIcons);
    array = arrayIcons;
  } else if (theme === "icons" && gridSize === 6) {
    arrayIcons = [
      <img className="w-[25px] md:w-[40px]" src="/user.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/anchor.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/car.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/flask.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/futbol.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/hand-spock.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/lira-sign.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/snowflake.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/sun.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/home.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/graduation-cap.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/globe.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/camera.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/share.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/apple.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/gamepad.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/book-alt.svg" />,
      <img className="w-[25px] md:w-[40px]" src="/key.svg" />,
    ];
    arrayIcons = arrayIcons.concat(arrayIcons);
    array = arrayIcons;
  }

  if (theme === "numbers" && gridSize == 4) {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  } else if (theme === "numbers" && gridSize == 6) {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    array = array.concat(array);
  }
  let timer: number;

  useEffect(() => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    setShuffledArray(shuffledArray);
  }, [shuffle]);

  useEffect(() => {
    if (numOfPlayers.length == 1) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
      if (matchedIndexes.length == array.length) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }
  }, [matchedIndexes]);

  const handleClick = (index: number) => {
    if (
      selectedIndexes.length < 2 &&
      !selectedIndexes.includes(index) &&
      !matchedIndexes.includes(index)
    ) {
      setSelectedIndexes([...selectedIndexes, index]);
      setCount(count + 1);
    }
  };

  //let svgElement1;
  //let svgElement2;

  useEffect(() => {
    if (selectedIndexes.length === 2) {
      if (theme === "numbers") {
        const [index1, index2] = selectedIndexes;
        if (shuffledArray[index1] === shuffledArray[index2]) {
          setTimeout(() => {
            setMatchedIndexes([...matchedIndexes, index1, index2]);
          }, 1000);
          setPlayerPoints((prevPoints) => {
            const newPoints = [...prevPoints];
            newPoints[currentPlayer]++;
            return newPoints;
          });
        } else {
          setTimeout(() => {
            if (numOfPlayers.length > 1) {
              setCurrentPlayer(
                (prevPlayer) => (prevPlayer + 1) % numOfPlayers.length
              );
            }
          }, 1000);
        }
      } else if (theme === "icons") {
        const [index1, index2] = selectedIndexes;
        const svgElement1 = shuffledArray[index1] as JSX.Element;
        const svgElement2 = shuffledArray[index2] as JSX.Element;
        console.log(svgElement1);
        if (
          svgElement1 &&
          svgElement2 &&
          svgElement1.type === svgElement2.type
        ) {
          const src1 = svgElement1.props.src;
          const src2 = svgElement2.props.src;
          if (src1 === src2) {
            setTimeout(() => {
              setMatchedIndexes([...matchedIndexes, index1, index2]);
              setPlayerPoints((prevPoints) => {
                const newPoints = [...prevPoints];
                newPoints[currentPlayer]++;
                return newPoints;
              });
            }, 1000);
          } else {
            setTimeout(() => {
              if (numOfPlayers.length > 1) {
                setCurrentPlayer(
                  (prevPlayer) => (prevPlayer + 1) % numOfPlayers.length
                );
              }
            }, 1000);
          }
        }
      }
      setTimeout(() => {
        setSelectedIndexes([]);
      }, 1000);
    }
  }, [selectedIndexes]);

  return (
    <>
      {matchedIndexes.length == array.length && (
        <SingleWin
          minutes={minutes}
          seconds={seconds}
          count={count}
          numOfPlayers={numOfPlayers}
          setOverLay={setOverLay}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setSelectedIndexes={setSelectedIndexes}
          setMatchedIndexes={setMatchedIndexes}
          setCount={setCount}
          setPlayerPoints={setPlayerPoints}
          setCurrentPlayer={setCurrentPlayer}
          shuffle={shuffle}
          setShuffle={setShuffle}
        />
      )}
      {matchedIndexes.length == array.length && numOfPlayers.length > 1 && (
        <MultiPlayer
          numOfPlayers={numOfPlayers}
          playerPoints={playerPoints}
          setOverLay={setOverLay}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setSelectedIndexes={setSelectedIndexes}
          setMatchedIndexes={setMatchedIndexes}
          setCount={setCount}
          setPlayerPoints={setPlayerPoints}
          setCurrentPlayer={setCurrentPlayer}
          shuffle={shuffle}
          setShuffle={setShuffle}
        />
      )}
      <Menu
        setMenu={setMenu}
        menu={menu}
        overlay={overLay}
        setOverLay={setOverLay}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setSelectedIndexes={setSelectedIndexes}
        setMatchedIndexes={setMatchedIndexes}
        setCount={setCount}
        setPlayerPoints={setPlayerPoints}
        numOfPlayers={numOfPlayers}
        setCurrentPlayer={setCurrentPlayer}
        setShuffle={setShuffle}
        shuffle={shuffle}
      />
      <main className="p-6 min-h-[100vh] font-akinson md:p-10 large:pt-[67px] large:px-[165px] large:bp-[70px]">
        <div
          className={` bg-blackRgba z-10 min-h-[100vh]  absolute  top-0 left-0 right-0 ${
            overLay || matchedIndexes.length == array.length
              ? "block"
              : "hidden"
          }`}
        ></div>
        <header className="flex items-center justify-between">
          <svg
            className="fill-blue"
            width="150"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.08 21V10.64c0-1.733.287-3.053.86-3.96s1.487-1.36 2.74-1.36c.96 0 1.647.233 2.06.7.413.467.667 1.087.76 1.86.093.773.14 1.627.14 2.56V21h6.12V10.52c0-1.733.28-3.033.84-3.9.56-.867 1.453-1.3 2.68-1.3.987 0 1.693.233 2.12.7.427.467.693 1.087.8 1.86.107.773.16 1.627.16 2.56V21h6.08V8.92c0-2.693-.48-4.753-1.44-6.18C29.04 1.313 27.293.6 24.76.6c-1.387 0-2.673.28-3.86.84a7.44 7.44 0 0 0-2.94 2.48c-.453-1.093-1.153-1.92-2.1-2.48C14.913.88 13.653.6 12.08.6c-1.467 0-2.72.347-3.76 1.04-1.04.693-1.787 1.413-2.24 2.16l-.76-2.64H0V21h6.08Zm39.2.48c1.627 0 3.22-.36 4.78-1.08 1.56-.72 2.86-1.84 3.9-3.36l-4.84-1.76c-.373.427-.9.78-1.58 1.06s-1.487.42-2.42.42c-1.12 0-2.14-.347-3.06-1.04-.92-.693-1.433-1.733-1.54-3.12H55.2c.133-2.347-.2-4.42-1-6.22-.8-1.8-1.98-3.213-3.54-4.24C49.1 1.113 47.227.6 45.04.6c-1.92 0-3.687.427-5.3 1.28a10.074 10.074 0 0 0-3.88 3.6c-.973 1.547-1.46 3.373-1.46 5.48 0 2.187.46 4.067 1.38 5.64a9.228 9.228 0 0 0 3.84 3.62c1.64.84 3.527 1.26 5.66 1.26ZM49.56 9h-9.04c.187-1.36.727-2.347 1.62-2.96.893-.613 1.913-.92 3.06-.92 1.173 0 2.187.327 3.04.98.853.653 1.293 1.62 1.32 2.9Zm14.6 12V10.64c0-1.733.287-3.053.86-3.96s1.487-1.36 2.74-1.36c.96 0 1.647.233 2.06.7.413.467.667 1.087.76 1.86.093.773.14 1.627.14 2.56V21h6.12V10.52c0-1.733.28-3.033.84-3.9.56-.867 1.453-1.3 2.68-1.3.987 0 1.693.233 2.12.7.427.467.693 1.087.8 1.86.107.773.16 1.627.16 2.56V21h6.08V8.92c0-2.693-.48-4.753-1.44-6.18C87.12 1.313 85.373.6 82.84.6c-1.387 0-2.673.28-3.86.84a7.44 7.44 0 0 0-2.94 2.48c-.453-1.093-1.153-1.92-2.1-2.48C72.993.88 71.733.6 70.16.6c-1.467 0-2.72.347-3.76 1.04-1.04.693-1.787 1.413-2.24 2.16l-.76-2.64h-5.32V21h6.08Zm38.84.48c1.813 0 3.52-.373 5.12-1.12 1.6-.747 2.893-1.9 3.88-3.46.987-1.56 1.48-3.527 1.48-5.9 0-2.4-.493-4.367-1.48-5.9-.987-1.533-2.28-2.667-3.88-3.4-1.6-.733-3.307-1.1-5.12-1.1-1.84 0-3.56.367-5.16 1.1-1.6.733-2.893 1.867-3.88 3.4-.987 1.533-1.48 3.5-1.48 5.9 0 2.373.493 4.34 1.48 5.9.987 1.56 2.28 2.713 3.88 3.46 1.6.747 3.32 1.12 5.16 1.12Zm0-4.72c-1.227 0-2.253-.44-3.08-1.32-.827-.88-1.24-2.36-1.24-4.44 0-2.107.42-3.58 1.26-4.42.84-.84 1.86-1.26 3.06-1.26 1.173 0 2.18.42 3.02 1.26.84.84 1.26 2.313 1.26 4.42 0 2.08-.407 3.56-1.22 4.44-.813.88-1.833 1.32-3.06 1.32ZM122.52 21V11c0-1.573.393-2.707 1.18-3.4.787-.693 1.913-1.04 3.38-1.04.293 0 .56.007.8.02.24.013.52.047.84.1V.6c-1.52-.08-2.813.2-3.88.84-1.067.64-1.907 1.76-2.52 3.36l-1.08-3.64h-4.8V21h6.08Zm11.36 6.44c1.733 0 3.107-.187 4.12-.56 1.013-.373 1.847-1.027 2.5-1.96s1.3-2.24 1.94-3.92l7.6-19.84h-6.52l-3.8 12.4-3.88-12.4h-6.52l7.6 19.72c-.213.667-.447 1.153-.7 1.46-.253.307-.607.5-1.06.58-.453.08-1.133.12-2.04.12h-1.2v4.4h1.96Z"
              fillRule="nonzero"
            />
          </svg>
          <div
            onClick={() => {
              setOverLay(true);
              setMenu(true);
            }}
            className="px-[18.5px] py-[10px] text-[16px] font-bold bg-orange hover:bg-orangeHover cursor-pointer rounded-[26px] text-white md:hidden
            "
          >
            Menu
          </div>
          <div className=" gap-4 hidden md:flex">
            <button
              onClick={() => {
                setMinutes(0);
                setSeconds(0);
                setMenu(false);
                setOverLay(false);
                setMatchedIndexes([]);
                setSelectedIndexes([]);
                setCount(0);
                setPlayerPoints(Array(numOfPlayers.length).fill(0));
                setCurrentPlayer(0);
                setShuffle(!shuffle);
              }}
              className=" h-[52px] rounded-[26px] bg-orange hover:bg-orangeHover text-center min-w-[127px] pt-3 pb-[14px] text-[20px] font-bold text-white"
            >
              Restart
            </button>
            <Link to={"/"}>
              <button
                onClick={() => {
                  setMenu(false);
                  setOverLay(false);
                }}
                className=" h-[52px]  block rounded-[26px] bg-footerGrey hover:text-white hover:bg-blueHover text-center min-w-[149px] pt-3 pb-[14px] text-[20px] font-bold text-blue"
              >
                New Game
              </button>
            </Link>
          </div>
        </header>
        <section
          className={`mt-20 grid  justify-center md:mt-[157px] large:mt-[105px] ${
            gridSize == 4
              ? "grid-cols-[auto_auto_auto_auto] gap-3 md:gap-5"
              : "grid-cols-[auto_auto_auto_auto_auto_auto] gap-[9px] md:gap-4"
          }`}
        >
          {shuffledArray.map((num, index) => {
            const isSelected = selectedIndexes.includes(index);
            const isMatched = matchedIndexes.includes(index);
            return (
              <div
                onClick={() => handleClick(index)}
                key={index}
                className={`bg-blue  flex justify-center items-center  font-bold  ${
                  gridSize == 4
                    ? "min-w-[72.5px] min-h-[72.5px]  rounded-[59px] md:min-w-[118px] md:min-h-[118px]"
                    : "min-w-[46.9px] min-h-[46.9px]    rounded-[41px] md:min-w-[82px] md:min-h-[82px] "
                }
                ${
                  !isMatched
                    ? "cursor-pointer"
                    : "bg-grey hover:bg-grey cursor-auto"
                }
                ${isSelected ? "bg-orange" : "hover:bg-blueHover"}`}
              >
                {isSelected || isMatched ? (
                  <p
                    className={`  text-white  ${
                      gridSize == 4
                        ? "text-[40px] md:text-[56px]"
                        : "text-[24px] leading-[30px] md:text-[44px]"
                    }`}
                  >
                    {" "}
                    {num}{" "}
                  </p>
                ) : (
                  <p>&nbsp;</p>
                )}
              </div>
            );
          })}
        </section>
        <footer
          className={`mt-[102px] flex gap-[25px] large:gap-[30px] large:relative md:mt-[126px] large:mt-[122px]  ${
            numOfPlayers.length == 1
              ? "md:px-[74px] large:pl-[285px] large:pr-[275px]"
              : "md:px-0"
          }`}
        >
          {numOfPlayers.length === 1 ? (
            <>
              <div className="large:h-[72px] py-[10px] text-blue relative bg-footerGrey w-[50%] rounded-[5px] md:rounded-[10px] md:pl-[21px] md:pr-6 md:flex md:justify-between md:items-center">
                <p className="text-center text-[15px] text-text md:text-[18px] ">
                  Timer
                </p>
                <p className="text-center text-[24px] md:text-[32px]">
                  {minutes}:{seconds}
                </p>
              </div>
              <div className=" large:h-[72px] bg-footerGrey text-blue relative w-[50%] py-[10px] rounded-[5px] md:rounded-[10px] md:pl-[21px] md:pr-6 md:flex md:justify-between md:items-center">
                <p className="text-center text-[15px] text-text md:text-[18px]">
                  Moves
                </p>
                <p className="text-center text-[24px]">{count}</p>
              </div>
            </>
          ) : (
            numOfPlayers.map((player, index) => {
              return (
                <div
                  key={index}
                  className={`large:h-[72px] large:flex large:items-center justify-between large:pl-[21px] large:pr-[24px] bg-footerGrey flex-1 md:rounded-[10px] px-[13px] h-[70px] md:h-20 py-[10px] rounded-[15px] relative md:pt-[14px] md:pb-3 ${
                    index === currentPlayer ? "bg-orange" : ""
                  }`}
                >
                  <div
                    className={` large:w-[39px] large:h-[19px] large:top-[-18px]  md:w-6 md:h-3 md:top-[-11px]  w-4 h-2 absolute  top-[-7px] left-[50%] translate-x-[-50%] ${
                      index === currentPlayer ? "block" : "hidden"
                    }`}
                  >
                    <img src="/150717.svg" className="w-full h-full" />
                  </div>
                  <p
                    className={`text-[15px]    large:mt-0  text-center md:text-start md:text-[18px] ${
                      index === currentPlayer ? "text-white" : "text-text"
                    }`}
                  >
                    P<span className="hidden md:inline">layer</span>
                    {player}
                  </p>

                  <p
                    className={`text-center text-[24px] md:text-[32px] leading-tight md:mt-[-4px] large:mt-0  mt-[2px] md:text-start ${
                      index === currentPlayer ? "text-white" : "text-blue"
                    }`}
                  >
                    {playerPoints[index]}
                  </p>
                  <div
                    className={`hidden absolute bottom-[-43px] text-[13px] tracking-[5px] w-full left-0  ${
                      index == currentPlayer ? "large:block" : "hidden"
                    }`}
                  >
                    <p className="text-center ">CURRENT TURN </p>
                  </div>
                </div>
              );
            })
          )}
        </footer>
      </main>
    </>
  );
};

export default Game;
