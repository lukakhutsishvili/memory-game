import { Link } from "react-router-dom";
import { singleWinType } from "../type";

const SingleWin: React.FC<singleWinType> = ({
  minutes,
  seconds,
  count,
  numOfPlayers,
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
  return (
    <div
      className={` large:mx-[393px]   pt-[32px] p-6 bg-white absolute w-available font-bold  z-30 top-[146px] md:top-[161px] mx-6 rounded-[10px] md:mx-[57px]  flex-col gap-4 font-akinson ${
        numOfPlayers.length == 1 ? "block" : "hidden"
      } md:px-[56px] md:pt-[51px] md:pb-[69px]`}
    >
      <h1 className="text-[24px] leading-tight md:text-[48px] text-darkBlue font-bold text-center">
        {"You did it!"}
      </h1>
      <p className="mt-[9px] text-[14px] text-text text-center md:text-[18px] md:mt-4 leading-tight">
        Game over! Here’s how you got on…
      </p>
      <div className="flex justify-between px-4 py-3 items-center bg-footerGrey rounded-[5px] mt-6 md:mt-10 md:px-8 md:py-[15px]">
        <p className="text-text text-[13px] md:text-[18px]">Time Elapsed</p>
        <p className="text-[20px] text-blue md:text-[32px] ">
          {minutes}:{seconds}
        </p>
      </div>
      <div className="flex justify-between px-4 py-3 items-center bg-footerGrey rounded-[5px] mt-2 md:mt-4  md:px-8 md:py-[15px]">
        <p className="text-text text-[13px]  md:text-[18px]">Moves Taken</p>
        <p className="text-[20px] text-blue md:text-[32px]">{count} Moves</p>
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
          className=" md:text-[20px]  md:mt-0 block mt-6 rounded-[26px] bg-orange hover:bg-orangeHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-white"
        >
          Restart
        </button>

        <Link to={"/"}>
          <button className=" md:text-[20px] hover:text-white  md:mt-0 block mt-4 rounded-[26px] bg-footerGrey hover:bg-blueHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-blue">
            Setup New Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleWin;
