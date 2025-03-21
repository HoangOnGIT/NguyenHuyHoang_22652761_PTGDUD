import fav_icon from "../assets/fav_icon.png";

export default function Item({ item }) {
  return (
    <li className="flex items-center justify-center  ">
      <div className="w-[200px] h-[230px] border rounded-2xl hover:bg-pink-300 transition-all duration-300 ease-in-out hover:scale-110 hover:ring-3 hover:ring-pink-600">
        <div className="flex items-center justify-center">
          <img
            src={item.images}
            style={{
              height: "140px",
              borderRadius: "20px 20px 0px 0px",
              fontWeight: "bold",
            }}
          ></img>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </span>
          <img src={fav_icon} style={{ height: "30px" }}></img>
        </div>
        <div style={{ marginLeft: "5px" }}>
          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              backgroundColor: "lightpink",
              color: "#AA336A",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            {" "}
            {item.id} minutes
          </span>
        </div>
      </div>
    </li>
  );

  // return (
  //     <li>
  //         <div style={{
  //             width: '200px', height: '230px', margin: '15px', border: 'solid gray 1px',
  //             borderRadius: '20px'
  //         }}>
  //             <img src={item.img} style={{ width: '200px',borderRadius: '20px 20px 0px 0px', fontWeight:'bold' }}></img>
  //             <div style={{display:'flex', justifyContent:'space-between', padding
  //         :'5px'}}>
  //                 <span style={{ fontSize: '15px', fontFamily:'sans-serif', fontWeight:'bold' }}>{item.name}</span>
  //                 <img src={fav_icon} style={{height:'30px'}}></img>
  //             </div>
  //             <div style={{marginLeft:'5px'}}><span style={{ fontFamily:'sans-serif', fontWeight:'bold',backgroundColor:'lightpink', color:'#AA336A', padding:'5px', borderRadius:'10px'}}> {item.time} minutes</span></div>
  //         </div>
  //     </li>)
}
