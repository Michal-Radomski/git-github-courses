import React from "react";

import "./HelpBox.scss";

function HelpBox({ title, text }: { title: string; text: string }): React.JSX.Element {
  return (
    <React.Fragment>
      <article className="help-box">
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </React.Fragment>
  );
}

export default HelpBox;
