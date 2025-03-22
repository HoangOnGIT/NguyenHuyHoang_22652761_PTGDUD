import archiveImg from "../assets/archive_check.png";
import avatar from "../assets/avatar.png";

export default function Profile() {
  return (
    <div className="flex justify-between items-center space-x-2.5 ">
      <button className="bg-pink-300 h-[40px] w-[160px] flex justify-around items-center hover:bg-pink-200 transition-all ease-in-out duration-300 hover:scale-110 rounded-2xl text-pink-700">
        <img src={archiveImg}></img>
        <span>Your Recipe Box</span>
      </button>
      <img src={avatar} className="h-[50px]"></img>
    </div>
  );
}

// .button {
//   background-color: lightpink;
//   color: palevioletred;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
