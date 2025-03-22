import "./Filter.css";
import list1 from "../assets/List1.png";
import PopupTab from "./PopupTab";
import CatergoryCheckbox from "./CatergoryCheckbox";
import rangeImg from "../assets/Slider1.png";
import StarRating from "./StarRating";
import star1 from "../assets/Rating11.png";
import star2 from "../assets/Rating15.png";
import star3 from "../assets/Rating14.png";
import star4 from "../assets/Rating12.png";
import star5 from "../assets/Rating13.png";

const types = [
  "Pan-fried",
  "Stir-fried",
  "Grilled",
  "Roosted",
  "Sauteed",
  "Baked",
  "Steamed",
  "Stewed",
];

const starSrc = [star1, star2, star3, star4, star5];

export default function Filter() {
  return (
    <>
      <div class="filter_container">
        <div class="header" className="flex">
          <img src={list1} className="h-[25px] w-[25px] "></img>
          <b>FILTER</b>
        </div>
        <div class="type">
          <PopupTab name="Type">
            <div className="grid grid-cols-2 mx-auto space-x-15">
              {types.map((name) => (
                <CatergoryCheckbox name={name} />
              ))}
            </div>
          </PopupTab>
        </div>
        <div className="time">
          <PopupTab name="Time">
            <div className="flex items-center flex-col h-15">
              <div className="flex justify-around items-center w-50">
                <span>30 mins</span> <span>50 mins</span>
              </div>
              <img src={rangeImg}></img>
            </div>
          </PopupTab>
        </div>
        <div class="rating">
          <PopupTab name="Rating">
            {starSrc.map((starSrcTemp, index) => (
              <StarRating src={starSrcTemp} index={index} />
            ))}
          </PopupTab>
        </div>
        <div class="footer">
          <button className="bg-pink-500 text-white rounded-2xl text-[20px] p-1.5 w-full m-3 hover:scale-110 hover:bg-pink-300 transition-all duration-300 ease-in-out focus:ring">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
