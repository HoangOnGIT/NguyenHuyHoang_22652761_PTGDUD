import { useEffect, useState } from "react";
import Item from "./Item";
import "./Content.css";

export default function Content() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // fetch('https://67cd343add7651e464ed9f4c.mockapi.io/api/v1/food/HuyHoang')
    fetch(`https://dummyjson.com/products?limit=8&skip=${page * 8}`)
      .then((res) => res.json())
      .then((data) => {
        // setItems(data)
        setItems(data.products);
        console.log(data.products);
      });
  }, [page]);

  function handleBack() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function handleForward() {
    setPage(page + 1);
  }

  return (
    <div>
      <div className="list-none overflow-scroll h-full grid grid-cols-4 gap-5 px-20 py-5">
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className=" text-center w-[80px] rounded-2xl bg-pink-300 p-1.5 mr-0.5 hover:bg-pink-200 hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={() => handleBack()}
        >
          {"<<"}
        </button>
        <button
          className=" text-center w-[80px] rounded-2xl bg-pink-300   p-1.5  ml-0.5  hover:bg-pink-200 hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={() => handleForward()}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}
