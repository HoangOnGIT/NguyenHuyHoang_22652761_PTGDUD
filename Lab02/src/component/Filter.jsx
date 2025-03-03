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
        <div class="header" style={{ display: "flex" }}>
          <img src={list1} style={{ width: "25px", height: "25px" }}></img>
          <b>FILTER</b>
        </div>
        <div class="type">
          <PopupTab name="Type">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {types.map((name) => (
                <CatergoryCheckbox name={name} />
              ))}
            </div>
          </PopupTab>
        </div>
        <div class="time">
          <PopupTab name="Time">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "120px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                {" "}
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
          <button
            style={{
              backgroundColor: "#F44B86",
              color: "white",
              width: "100%",
              height: "60%",
              fontSize: "20px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
