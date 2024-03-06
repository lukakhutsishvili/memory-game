import Memory from "../components/memory";
import { Link } from "react-router-dom";
import { homeTypes } from "../type";
/*import { useSelector } from "react-redux";
import { RootState } from "../store/redux";
import { useDispatch } from "react-redux";
import { setTheme } from "../store/themeSlice";*/

const Home: React.FC<homeTypes> = ({
  numOfPlayers,
  setNumOfPlayers,
  gridSize,
  setGridSize,
  theme,
  setTheme,
}) => {
  /*const theme = useSelector((store: RootState) => store.theme);
  const dispatch = useDispatch();
  dispatch(setTheme(2));*/

  return (
    <main className="large:pt-[154px] large:px-[393px] large:pb-[183px] min-h-main px-6 font-akinson pt-[80px] pb-[116px]  bg-darkBlue flex flex-col items-center md:pt-[169px] md:px-[57px] md:pb-[168px]">
      <Memory />
      <section className="mt-[45px]  p-6 font-bold w-full bg-white rounded-[10px] md:mt-[78px] md:p-[56px] ">
        <h1 className=" text-small  text-text md:text-[20px]">Select Theme</h1>
        <div className="grid grid-cols-[auto_auto] mt-[11px] gap-[11px] md:mt-4 md:gap-[30px]  ">
          <div
            onClick={() => setTheme("numbers")}
            className={`px-[33px] cursor-pointer py-[10px]  rounded-[26px] flex justify-center md:px-[73px] md:h-[52px] md:items-center   ${
              theme === "numbers" ? "bg-blue" : "hover:bg-blueHover bg-grey"
            }`}
          >
            <p className="text-[16px] font-bold text-white md:text-[26px]">
              Numbers
            </p>
          </div>
          <div
            onClick={() => setTheme("icons")}
            className={`px-[45.5px] cursor-pointer py-[10px] md:h-[52px] md:items-center  rounded-[26px] flex justify-center  md:px-[73px] ${
              theme === "icons" ? "bg-blue" : " hover:bg-blueHover bg-grey"
            }`}
          >
            <p className="text-[16px] font-bold text-white md:text-[26px]">
              Icons
            </p>
          </div>
        </div>
        <h1 className=" text-small text-text mt-6 md:text-[20px] md:mt-8">
          Numbers of Players
        </h1>
        <div className="grid grid-cols-[auto_auto_auto_auto] gap-[10px] mt-[11px] md:mt-4 md:gap-[21px] ">
          <div
            onClick={() => setNumOfPlayers([1])}
            className={`py-[10px] cursor-pointer min-w-62px rounded-[26px] md:h-[52px] md:items-center text-[16px]  text-white flex  justify-center md:text-[26px]   ${
              numOfPlayers.length === 1
                ? "bg-blue"
                : "hover:bg-blueHover bg-grey"
            }`}
          >
            1
          </div>
          <div
            onClick={() => setNumOfPlayers([1, 2])}
            className={`py-[10px] cursor-pointer md:h-[52px] md:items-center min-w-62px rounded-[26px] text-[16px]  flex  justify-center  text-white  md:text-[26px]   ${
              numOfPlayers.length === 2
                ? "bg-blue"
                : "bg-grey hover:bg-blueHover"
            }`}
          >
            2
          </div>
          <div
            onClick={() => setNumOfPlayers([1, 2, 3])}
            className={`py-[10px]  cursor-pointer min-w-62px  md:h-[52px] md:items-center rounded-[26px] text-[16px]  flex  justify-center  text-white md:text-[26px]    ${
              numOfPlayers.length === 3
                ? "bg-blue"
                : "bg-grey hover:bg-blueHover"
            }`}
          >
            3
          </div>
          <div
            onClick={() => setNumOfPlayers([1, 2, 3, 4])}
            className={`py-[10px] min-w-62px cursor-pointer
           rounded-[26px] text-[16px]  flex  justify-center md:h-[52px] md:items-center text-white md:text-[26px]     ${
             numOfPlayers.length === 4
               ? "bg-blue"
               : "bg-grey hover:bg-blueHover"
           }`}
          >
            4
          </div>
        </div>
        <h1 className=" text-small  text-text mt-6 md:text-[20px] md:mt-8">
          Select Theme
        </h1>
        <div className="mt-[11px] grid grid-cols-[auto_auto] gap-[11px] md:mt-4 md:gap-[30px] ">
          <div
            onClick={() => setGridSize(4)}
            className={`cursor-pointer min-w-[134px]  py-[10px]  rounded-[26px] flex justify-center text-[16px] font-bold text-white  md:text-[26px]  ${
              gridSize === 4 ? "bg-blue" : " hover:bg-blueHover bg-grey"
            }`}
          >
            4x4
          </div>
          <div
            onClick={() => setGridSize(6)}
            className={`cursor-pointer  min-w-[134px] px-[45.5px] py-[10px] rounded-[26px] flex justify-center text-[16px] font-bold text-white md:text-[26px]  ${
              gridSize === 6 ? "bg-blue" : " hover:bg-blueHover bg-grey"
            }`}
          >
            6x6
          </div>
        </div>
        <Link to={"/memory-game"}>
          <div className=" md:rounded-[35px] cursor-pointer flex justify-center hover:bg-orangeHover bg-orange mt-8 pt-3 pb-[14px] text-white rounded-[26px] md:pt-4 md:pb-[14px] text-[26px] ">
            Start Game
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Home;
