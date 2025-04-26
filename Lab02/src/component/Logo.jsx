import logo from "../assets/avatar_small.png";
import searchImg from "../assets/search.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-between">
      <img className="mr-2.5" src={logo}></img>
      <div className="flex">
        <img src={searchImg} className="h-[40px]"></img>
        <input
          type="text"
          className="bg-white rounded-2xl border-pink-400 h-[40px] w-[300px] text-gray-600 focus:ring-2 focus:ring-pink-400"
        ></input>
      </div>
    </div>
  );
}
