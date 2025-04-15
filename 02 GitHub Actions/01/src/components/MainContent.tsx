import React from "react";

import HelpArea from "./HelpArea";

function MainContent(): React.JSX.Element {
  const [helpVisible, setHelpVisible] = React.useState<boolean>(false);

  function toggleHelp(): void {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <React.Fragment>
      <main>
        <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"} Help</button>
        {helpVisible ? <HelpArea /> : null}
      </main>
    </React.Fragment>
  );
}

export default MainContent;
