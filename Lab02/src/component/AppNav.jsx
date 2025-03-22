import "./AppNav.css";

export default function AppNav() {
  return (
    <div className="flex items-center">
      <ul className="flex list-none">
        <li className="mr-5 hover:text-pink-500 transition-all duration-300 ease-in-out hover:scale-110">
          <a href="">What to cook</a>{" "}
        </li>
        <li className="mr-5 hover:text-pink-500 transition-all duration-300 ease-in-out hover:scale-110">
          {" "}
          <a href="">Recipe</a>
        </li>
        <li className="mr-5 hover:text-pink-500 transition-all duration-300 ease-in-out hover:scale-110">
          {" "}
          <a href="">Ingredients</a>
        </li>
        <li className="mr-5 hover:text-pink-500 transition-all duration-300 ease-in-out hover:scale-110">
          {" "}
          <a href="">Occasions</a>
        </li>
        <li className="mr-5 hover:text-pink-500 transition-all duration-300 ease-in-out hover:scale-110">
          {" "}
          <a href="">About Us</a>
        </li>
      </ul>
    </div>
  );
}
