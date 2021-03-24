import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <div>
      <BackgroundImage>
        <header>
          <Weather />
        </header>
        <main>
          <aside></aside>
          <aside></aside>
        </main>
        <footer></footer>
      </BackgroundImage>
    </div>
  );
}

export default App;
