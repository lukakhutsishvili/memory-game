import { Link } from "react-router-dom";
import { multiWinType } from "../type";

const MultiPlayer: React.FC<multiWinType> = ({
  numOfPlayers,
  playerPoints,
  setMinutes,
  setSeconds,
  setMatchedIndexes,
  setSelectedIndexes,
  setCount,
  setPlayerPoints,
  setOverLay,
  setCurrentPlayer,
  shuffle,
  setShuffle,
}) => {
  const maxPoints = Math.max(...playerPoints);
  const maxPointCount = playerPoints.filter((point) => point === maxPoints);
  console.log(maxPointCount);
  return (
    <div
      className={` large:mx-[393px] large:top-[257px] md:mx-[57px] pt-[32px] md:top-[161px] p-6 bg-white absolute w-available font-bold  z-30 top-[146px] mx-6 rounded-[10px]  flex-col gap-4 font-akinson ${
        numOfPlayers.length > 1 ? "block" : "hidden"
      } md:px-[56px] md:pt-[51px] md:pb-[69px]`}
    >
      <h1 className="text-[24px] text-darkBlue font-bold text-center md:text-[48px] leading-tight">
        {maxPointCount.length === 1
          ? `Player ${playerPoints.indexOf(maxPoints) + 1} wins!`
          : "It's a tie"}
      </h1>
      <p className="mt-9px font-[14px] text-text text-center  md:text-[18px] md:mt-4 leading-tight">
        Game over! Here’s are results
      </p>
      <div className=" grid mt-8 md:mt-10 gap-2 md:gap-4">
        {playerPoints
          .map((point, index) => ({ point, index }))
          .sort((a, b) => b.point - a.point)
          .map((player, index) => (
            <div
              key={index}
              className={`flex justify-between px-4 py-3 items-center  rounded-[5px] md:px-8 md:py-[15px] ${
                player.point === maxPoints ? "bg-blue" : "bg-footerGrey "
              }`}
            >
              <p
                className={` text-[13px] md:text-[18px] ${
                  player.point === maxPoints ? "text-white" : "text-text "
                }`}
              >
                Player {player.index + 1}{" "}
                {player.point === maxPoints && (
                  <span className="text-[13px] md:text-[18px]">(winner)</span>
                )}
              </p>
              <p
                className={` text-[20px] md:text-[32px] ${
                  player.point === maxPoints ? "text-white" : "text-blue "
                }`}
              >
                {player.point} pairs
              </p>
            </div>
          ))}
      </div>
      <div className="md:grid md:items-center md:grid-cols-[50%_50%] md:mt-10 md:gap-[14px] ">
        <button
          onClick={() => {
            setMinutes(0);
            setSeconds(0);
            setOverLay(false);
            setMatchedIndexes([]);
            setSelectedIndexes([]);
            setCount(0);
            setPlayerPoints(Array(numOfPlayers.length).fill(0));
            setCurrentPlayer(0);
            setShuffle(!shuffle);
          }}
          className=" md:text-[20px] md:mt-0 block mt-6 rounded-[26px] bg-orange hover:bg-orangeHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-white"
        >
          Restart
        </button>

        <Link to={"/"}>
          <button className=" hover:text-white  md:text-[20px] md:mt-0 block mt-4 rounded-[26px] bg-footerGrey hover:bg-blueHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-blue">
            Setup New Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MultiPlayer;
