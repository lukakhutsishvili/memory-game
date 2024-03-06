import { Link } from "react-router-dom";
import { menuType } from "../type";

const Menu: React.FC<menuType> = ({
  setMenu,
  setOverLay,
  menu,
  setMinutes,
  setSeconds,
  setMatchedIndexes,
  setSelectedIndexes,
  setCount,
  setPlayerPoints,
  numOfPlayers,
  setCurrentPlayer,
  shuffle,
  setShuffle
}) => {
  return (
    <div
      className={`p-6 bg-white absolute w-available  z-30 top-[222px] mx-6 rounded-[10px]  flex-col gap-4  ${
        menu ? "flex" : "hidden"
      }`}
    >
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
        className="block rounded-[26px] bg-orange hover:bg-orangeHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-white"
      >
        Restart
      </button>
      <Link to={"/"}>
        <button
          onClick={() => {
            setMenu(false);
            setOverLay(false);
          }}
          className="block rounded-[26px] bg-footerGrey hover:bg-blueHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-white"
        >
          New Game
        </button>
      </Link>
      <button
        onClick={() => {
          setMenu(false);
          setOverLay(false);
        }}
        className="block rounded-[26px] bg-footerGrey hover:bg-blueHover text-center w-full pt-3 pb-[14px] text-[18px] font-bold text-white"
      >
        Resume Game
      </button>
    </div>
  );
};
export default Menu;
