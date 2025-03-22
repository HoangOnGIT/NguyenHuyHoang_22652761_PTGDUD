import "./App.css";
import Logo from "./component/Logo";
import AppNav from "./component/AppNav";
import Profile from "./component/Profile";
import Filter from "./component/Filter";
import Content from "./component/content";

function App() {
  return (
    <>
      {/* <div class="container">
        <div class="header" id="flex-container">
          <Logo />
          <AppNav />
          <Profile />
        </div>
        <div class="menu" style={{ color: "black" }}>
          <Filter />
        </div>
        <div class="content">
          <Content />
        </div>
        <div class="footer"></div>
      </div> */}
      <div class="grid grid-rows-[100px_1fr_200px] grid-cols-[1fr_3fr] bg-rose-50 bg gap-1.5  text-pink-700">
        <div class="header col-span-2 flex justify-around">
          <Logo />
          <AppNav />
          <Profile />
        </div>
        <div class="menu col-span-1 h-[600px] text-black flex justify-end">
          <Filter />
        </div>
        <div class="content col-span-1">
          <Content />
        </div>
        <div class="footer col-span-2"></div>
      </div>
    </>
  );
}

export default App;
