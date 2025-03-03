import "./Profile.css";
import archiveImg from "../assets/archive_check.png";
import avatar from "../assets/avatar.png";

export default function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <button className="button" style={{ marginRight: "20px" }}>
        <img src={archiveImg}></img>
        <span style={{ lineHeight: "0px" }}>Your Recipe Box</span>
      </button>
      <img src={avatar} style={{ width: "50px" }}></img>
    </div>
  );
}
