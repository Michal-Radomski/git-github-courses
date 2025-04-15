import React from "react";

import "./App.scss";
import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </React.Fragment>
  );
};

export default App;
