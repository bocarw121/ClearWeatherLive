import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Journal from "./features/journal/Journal";

function App() {
  return (
    <div>
      <BackgroundImage>
        <header>
          <Weather />
        </header>
        <main>
          <aside></aside>
          <Journal />
          <aside></aside>
        </main>
        <footer></footer>
      </BackgroundImage>
    </div>
  );
}

export default App;
